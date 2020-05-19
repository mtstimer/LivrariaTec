import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Produto } from './models/produto.model';
import { Editora } from './models/editora.model';
import { Genero } from './models/genero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'LivrariaTec';

  constructor(private firestore: AngularFirestore) { }

  async ngOnInit() {
    const documentoProduto = await this.firestore.collection('produtos')
    .doc('z68KEzmNC4Hfix64QtyJ').get().toPromise();

    const produto = { 
      id: documentoProduto.id,
      ...documentoProduto.data()
    } as Produto;

    console.log(produto);

    
    const documentoEditora = await this.firestore.collection('editoras')
    .doc('yxo3Tcs3xVjNSQAJgz2a').get().toPromise();

    const editora = { 
      id: documentoEditora.id,
      ...documentoEditora.data()
    } as Editora;

    console.log(editora);

    const documentoGenero = await this.firestore.collection('generos')
    .doc('EhNeoQkRAAyHDm6vwyIR').get().toPromise();

    const genero = { 
      id: documentoGenero.id,
      ...documentoGenero.data()
    } as Genero;

    console.log(genero);

  }

}
