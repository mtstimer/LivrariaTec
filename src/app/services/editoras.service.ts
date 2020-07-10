import { Injectable } from '@angular/core';
import { Editora } from '../models/editora.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditorasService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Editora[]> {
    return this.firestore.collection<Editora>('editoras').valueChanges({ idField: 'id' });
  }

  private convertToEditora(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Editora {

    const dados = document.data();

    const editora = {
        id: document.id,
        ...dados
    } as Editora;

    if (dados.dataEdicao) {
        editora.dataEdicao = dados.dataEdicao.toDate();
    }

    if (dados.dataCadastro) {
        editora.dataCadastro = dados.dataCadastro.toDate();
    }

    return editora;

}
  
  async add(editora: Editora): Promise<Editora>{
    const docRef = await this.firestore.collection<Editora>('editoras').add(editora);
    const doc = await docRef.get();

    return{
      id: doc.id,
      ...doc.data()
    } as Editora;

  }

  async get(id: string): Promise<Editora> {

    const document = await this.firestore.collection<Editora>('editoras').doc(id).get().toPromise();

    return this.convertToEditora(document);
  }

  async update(id: string, editora: Editora): Promise<void> {

    await this.firestore.collection<Editora>('editoras').doc(id).update(editora);

  }
}
