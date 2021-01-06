import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public links = [
    {
      title:'Dashboard',
      url:''
    },
    {
      title:'Atendimentos',
      url:'/atendimento'
    },
    {
      title:'Pacientes',
      url:'/pacientes'
    },
    {
      title:'Unidades',
      url:'/unidades'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
