import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/models/product.model';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  public products: ProductModel[] = [];
  public readonly apiURL: string = "http://localhost:3000"

  constructor(
    private _http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.listarTodosProdutos()
  }

  listarTodosProdutos() {
    const produtos = this._http.get(`${this.apiURL}/produtos`)
    console.log(produtos)
  }
  listarProdutoPorId() { }
  adicionarProduto() { }
  alterarProduto() { }
  excluirProduto() { }

}
