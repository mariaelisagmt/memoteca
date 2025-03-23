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
      modelo: 'modelo1'
    },
    {
      conteudo: 'Comunicacao entre componentes',
      autoria: 'Angualar',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Comunicacao',
      autoria: 'Angualar',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem Ipsum is simply dummy text of the pr.',
      autoria: 'Angualar',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem Ipsum is simply dummy text of the printing m.',
      autoria: 'Angualar',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      autoria: 'Angualar',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
