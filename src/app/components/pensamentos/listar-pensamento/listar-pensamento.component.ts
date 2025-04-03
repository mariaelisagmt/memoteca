import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favorito: boolean = false;
  listaFavoritos: Pensamento[] = [];

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.favorito = false;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listar(++this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        if (!listaPensamentos.length) {
          this.haMaisPensamentos = false;
        }
        this.listaPensamentos.push(...listaPensamentos);
      });
  }

  pesquisarPensamentos() {
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listarPensamentos) => {
        this.listaPensamentos = listarPensamentos;
      });
  }

  listarFavoritos() {
    this.favorito = true;
    this.haMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service
      .listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listarPensamentosFavoritos) => {
        this.listaPensamentos = listarPensamentosFavoritos;
        this.listaFavoritos = listarPensamentosFavoritos;
      });
  }
}
