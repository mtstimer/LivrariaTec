import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { ProdutosService } from '../services/produtos.service';
import { Genero } from '../models/genero.model';
import { EditorasService } from '../services/editoras.service';
import { Editora } from '../models/editora.model';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edicao-produto',
  templateUrl: './edicao-produto.component.html',
  styleUrls: ['./edicao-produto.component.scss']
})
export class EdicaoProdutoComponent implements OnInit {

    idProduto: string;
    produto: Produto;

    generos: Observable<Genero[]>;
    editoras: Observable<Editora[]>;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required],
        descricao: ['', Validators.required],
        quantidade: ['', [Validators.required],
        preco: ['', [Validators.required],
        idGenero: ['', Validators.required],
        idEditora: ['', Validators.required],
    });

    constructor(
        private formBuilder: FormBuilder,
        private generosService: GenerosService,
        private editorasService: EditorasService,
        private produtosService: ProdutosService,
        private snackBar: MatSnackBar,
        private location: Location,
        private activedRoute: ActivatedRoute
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.generos = this.generosService.getObservable();
        this.editoras = this.editorasService.getObservable();

        this.idProduto = this.activedRoute.snapshot.paramMap.get('id');
        this.produto = await this.produtosService.get(this.idProduto);

        console.log(this.produto);

        this.formulario.patchValue(this.produto);

        this.formulario.enable();
    }

    async submit() {

        if (!this.formulario.valid) {
            return;
        }

        this.formulario.disable();

        const produtoEditado = this.formulario.value as Produto;
        produtoEditado.dataEdicao = new Date();

        const arte = await this.produtosService.update(this.idProduto, produtoEditado);

        console.log('Um arte foi editada -------------------------');
        console.log('Arte:');
        console.log(this.produto);
        console.log('Campos atualizados:');
        console.log(produtoEditado);

        Object.assign(this.produto, produtoEditado);

        this.formulario.enable();

        this.snackBar.open('Arte atualizada com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
