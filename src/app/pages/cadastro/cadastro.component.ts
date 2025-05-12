import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface TipoUsuario {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
 cadastroForm!: FormGroup;
 selectedValue!: string ;

 tiposUsuarios: TipoUsuario[] = [
  { value: 'cliente', viewValue: 'Cliente' },
  { value: 'profissional', viewValue: 'Profissional' },

 ]

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      senha: [''],
      tipoUsuario: [''],
      especialidades: [''],
      localizacao: ['']
    });
  }

}
