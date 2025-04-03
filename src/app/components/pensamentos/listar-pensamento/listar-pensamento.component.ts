import { Router } from '@angular/router';
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
  titulo: string = "Meu Mural";

  constructor(
    private service: PensamentoService,
    private router: Router) {}

  ngOnInit(): void {
    this.service
      .listar(this.paginaAtual, this.filtro, this.favorito)
      .subscribe((listaPensamentos) => {
        this.listaPensamentos = listaPensamentos;
      });
  }

  recarregarComponente() {
    this.favorito = false;
    this.paginaAtual = 1;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate([this.router.url]);
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
    this.titulo = "Meus Favoritos";
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
