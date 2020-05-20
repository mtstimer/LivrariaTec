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
    return this.firestore.collection<Genero>('genero').valueChanges({ idField: 'id' });
  }
  
  async add(genero: Genero): Promise<Genero>{
    const docRef = await this.firestore.collection<Genero>('generos').add(genero);
    const doc = await docRef.get();

    return{
      id: doc.id,
      ...doc.data()
    } as Genero;

  }

}
