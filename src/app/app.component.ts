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
  }

}
