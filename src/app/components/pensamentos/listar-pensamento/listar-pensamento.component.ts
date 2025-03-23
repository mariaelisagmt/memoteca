import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'Teste de componentes',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Comunicacao entre componentes',
      autoria: 'Angualar',
      modelo: 'modelo4'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
