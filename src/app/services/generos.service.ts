import { Injectable } from '@angular/core';
import { Genero } from '../models/genero.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  constructor(private firestore: AngularFirestore) { }

  getObservable(): Observable<Genero[]> {
    return this.firestore.collection<Genero>('generos').valueChanges({ idField: 'id' });
  }

  private convertToGenero(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Genero {

    const dados = document.data();

    const genero = {
        id: document.id,
        ...dados
    } as Genero;

    if (dados.dataEdicao) {
        genero.dataEdicao = dados.dataEdicao.toDate();
    }

    if (dados.dataCadastro) {
        genero.dataCadastro = dados.dataCadastro.toDate();
    }

    return genero;

}
  
  async add(genero: Genero): Promise<Genero>{
    const docRef = await this.firestore.collection<Genero>('generos').add(genero);
    const doc = await docRef.get();

    return{
      id: doc.id,
      ...doc.data()
    } as Genero;

  }

  async get(id: string): Promise<Genero> {

    const document = await this.firestore.collection<Genero>('generos').doc(id).get().toPromise();

    return this.convertToGenero(document);

}

  async update(id: string, genero: Genero): Promise<void> {

    await this.firestore.collection<Genero>('generos').doc(id).update(genero);

  }



}
