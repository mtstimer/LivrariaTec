import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EditorasService } from '../services/editoras.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Editora } from '../models/editora.model';

@Component({
  selector: 'app-edicao-editora',
  templateUrl: './edicao-editora.component.html',
  styleUrls: ['./edicao-editora.component.scss']
})
export class EdicaoEditoraComponent implements OnInit {

    idEditora: string;
    editora: Editora;

    formulario = this.formBuilder.group({
        nome: ['', Validators.required]
    });

    constructor(
        private formBuilder: FormBuilder,
        private editorasService: EditorasService,
        private activedRoute: ActivatedRoute,
        private snackBar: MatSnackBar,
        private location: Location,
    ) { }

    async ngOnInit() {

        this.formulario.disable();

        this.idEditora = this.activedRoute.snapshot.paramMap.get('id');
        this.editora = await this.editorasService.get(this.idEditora);

        this.formulario.patchValue(this.editora);

        this.formulario.enable();

    }

    async submit() {

        if (!this.formulario.valid || !this.editora) {
            return;
        }

        this.formulario.disable();

        const editoraEditado = this.formulario.value as Editora;
        editoraEditado.dataEdicao = new Date();

        await this.editorasService.update(this.idEditora, editoraEditado);

        console.log('Um estilo foi editado -------------------------');
        console.log('Genero:');
        console.log(this.editora);
        console.log('Campos atualizados:');
        console.log(editoraEditado);


        Object.assign(this.editora, editoraEditado);

        this.formulario.enable();

        this.snackBar.open('Estilo atualizado com sucesso!');

    }

    voltar() {
        this.location.back();
    }

}
