import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { ProdutosService } from '../services/produtos.service';
import { Produto } from '../models/produto.model';
import { Observable } from 'rxjs';
import { Genero } from '../models/genero.model';
import { GenerosService } from '../services/generos.service';

@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.component.html',
  styleUrls: ['./cadastro-produto.component.scss']
})
export class CadastroProdutoComponent implements OnInit {
  
  generos: Observable<Genero[]>;

  formulario = this.formBuilder.group({
    nome: ['', Validators.required],
    descricao: ['', Validators.required],
    idGenero: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  
  constructor(
    private formBuilder: FormBuilder,
    private produtosService: ProdutosService,
    private generosService: GenerosService
  ) { }

  ngOnInit(): void {
    this.generos = this.generosService.getObservable();
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const novoProduto = this.formulario.value as Produto;
    const produtoRetorno = await this.produtosService.add(novoProduto);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }

}
