import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroGeneroComponent } from './cadastro-genero/cadastro-genero.component';
import { CadastroProdutoComponent } from './cadastro-produto/cadastro-produto.component';


const routes: Routes = [
  {path: 'generos/cadastro', component: CadastroGeneroComponent},
  {path: 'produtos/cadastro', component: CadastroProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
