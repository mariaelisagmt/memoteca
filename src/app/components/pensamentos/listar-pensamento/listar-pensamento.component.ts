import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = "";
  favorito: boolean = false;

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listaPensamentos => {
        this.listarPensamentos = listaPensamentos;
    });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe( listaPensamentos => {
        if(!listaPensamentos.length){
          this.haMaisPensamentos = false;
        }
        this.listarPensamentos.push(...listaPensamentos);
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listarPensamentos => {
        this.listarPensamentos = listarPensamentos;
      });
  }

  listarFavoritos() {
    this.favorito = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe(listarPensamentosFavoritos => {
        this.listarPensamentos = listarPensamentosFavoritos;
      });
  }
}
