import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { EdicaoGeneroComponent } from './edicao-genero/edicao-genero.component';
import { CadastroEditoraComponent } from './cadastro-editora/cadastro-editora.component';
import { EdicaoEditoraComponent } from './edicao-editora/edicao-editora.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';
import { EdicaoProdutoComponent } from './edicao-produto/edicao-produto.component';


const routes: Routes = [
  {path: 'generos/cadastro', component: CadastroGeneroComponent},
  {path: 'generos/edicao', component: EdicaoGeneroComponent},
  {path: 'editoras/cadastro', component: CadastroEditoraComponent},
  {path: 'editoras/edicao', component: EdicaoEditoraComponent},
  {path: 'produtos/cadastro', component: CadastroProdutoComponent},
  {path: 'produtos/edicao', component: EdicaoProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
