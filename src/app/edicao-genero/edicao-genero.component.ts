import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { GenerosService } from '../services/generos.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Genero } from '../models/genero.model';

@Component({
  selector: 'app-edicao-genero',
  templateUrl: './edicao-genero.component.html',
  styleUrls: ['./edicao-genero.component.scss']
})
export class EdicaoGeneroComponent implements OnInit {

    idGenero: string;
    genero: Genero;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private generosService: GenerosService,
        private activedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.idGenero = this.activedRoute.snapshot.paramMap.get('id');
        this.genero = await this.generosService.get(this.idGenero);

        this.formulario.patchValue(this.genero);

        this.formulario.enable();

    }

    async submit() {

        if (!this.formulario.valid || !this.genero) {
            return;
        }

        this.formulario.disable();

        const generoEditado = this.formulario.value as Genero;
        generoEditado.dataEdicao = new Date();

        await this.generosService.update(this.idGenero, generoEditado);

        console.log('Um estilo foi editado -------------------------');
        console.log('Genero:');
        console.log(this.genero);
        console.log('Campos atualizados:');
        console.log(generoEditado);


        Object.assign(this.genero, generoEditado);

        this.formulario.enable();

        this.snackBar.open('Estilo atualizado com sucesso!');

    }

    voltar() {
        this.location.back();
    }
}
