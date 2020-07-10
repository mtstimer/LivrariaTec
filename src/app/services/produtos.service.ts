import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: AngularFirestore) { 

  }

  private convertToProduto(document: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData>): Produto {

    const dados = document.data();

    const produto = {
        id: document.id,
        ...dados
    } as Produto;

    if (dados.dataEdicao) {
      produto.dataEdicao = dados.dataEdicao.toDate();
    }

    if (dados.dataCadastro) {
      produto.dataCadastro = dados.dataCadastro.toDate();
    }

    return produto;

}

  async add(produto: Produto): Promise<Produto>{
    const docRef = await this.firestore.collection<Produto>('produtos').add(produto);
    const doc = await docRef.get();

    return{
      id: doc.id,
      ...doc.data()
    } as Produto;

  }

  async get(id: string): Promise<Produto> {

    const document = await this.firestore.collection<Produto>('produtos').doc(id).get().toPromise();

    return this.convertToProduto(document);

}

  async update(id: string, produto: Produto): Promise<void> {

    await this.firestore.collection<Produto>('produtos').doc(id).update(produto);

}
}
