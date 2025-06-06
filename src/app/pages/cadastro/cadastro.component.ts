import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { PrimeNGConfig } from 'primeng/api';


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
public dropdownEspecialidadesSettings = {};
public data: { item_id: number; item_text: string }[] = [];

selectedEspecialidades: string[] = [];
especialidadesSalao!: any[];

 tiposUsuarios: TipoUsuario[] = [
  { value: 'cliente', viewValue: 'Cliente' },
  { value: 'profissional', viewValue: 'Profissional' },
 ]



  constructor(
    private fb: FormBuilder,
    private primengConfig: PrimeNGConfig
  ) {

  }

  ngOnInit(): void {
    this.iniciarFormulario();
    this.carregarEspecialidades();
    this.primengConfig.ripple = true;

  }

  iniciarFormulario() {
    this.cadastroForm = this.fb.group({
      nome: [''],
      email: [''],
      senha: ['', [Validators.maxLength(6)]],
      tipoUsuario: [''],
      especialidades: [''],
      localizacao: [''],
    });
  }

  carregarEspecialidades(){

    this.especialidadesSalao = [
    { name: "Cabeleireiro(a)", code: 'Cab' },
    { name: "Barbeiro", code: 'Barb' },
    { name: "Maquiador", code: 'Maqu' },
    ]
  }

}
