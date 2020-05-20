import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private firestore: AngularFirestore) { 

  }

  async add(produto: Produto): Promise<Produto>{
    const docRef = await this.firestore.collection<Produto>('produtos').add(produto);
    const doc = await docRef.get();

    return{
      id: doc.id,
      ...doc.data()
    } as Produto;

  }
}
