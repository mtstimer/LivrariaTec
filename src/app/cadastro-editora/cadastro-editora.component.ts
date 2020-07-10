import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Editora } from '../models/editora.model';
import { EditorasService } from '../services/editoras.service';

@Component({
  selector: 'app-cadastro-editora',
  templateUrl: './cadastro-editora.component.html',
  styleUrls: ['./cadastro-editora.component.scss']
})
export class CadastroEditoraComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  
  constructor(
    private formBuilder: FormBuilder,
    private editorasService: EditorasService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const editora = this.formulario.value as Editora;
    const editoraRetorno = await this.editorasService.add(editora);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }
}
