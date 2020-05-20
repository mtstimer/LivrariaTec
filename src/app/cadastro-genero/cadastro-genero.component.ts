import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import { Genero } from '../models/genero.model';
import { GenerosService } from '../services/generos.service';

@Component({
  selector: 'app-cadastro-genero',
  templateUrl: './cadastro-genero.component.html',
  styleUrls: ['./cadastro-genero.component.scss']
})
export class CadastroGeneroComponent implements OnInit {

  formulario = this.formBuilder.group({
    nome: ['', Validators.required]
  });

  @ViewChild(FormGroupDirective) formGroupDirective: FormGroupDirective;
  
  constructor(
    private formBuilder: FormBuilder,
    private generosService: GenerosService
  ) { }

  ngOnInit(): void {
  }

  async submit() {

    if (!this.formulario.valid) {
      return;
    }

    this.formulario.disable();

    const genero = this.formulario.value as Genero;
    const generoRetorno = await this.generosService.add(genero);

    this.formulario.enable();
    this.formGroupDirective.resetForm();

  }
}
