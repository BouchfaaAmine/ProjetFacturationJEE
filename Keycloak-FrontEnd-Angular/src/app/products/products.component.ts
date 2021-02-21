import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products;

  constructor() { }

  ngOnInit(): void {
    this.products = [
      {id: 1, name: 'Ordinateur', price: 7600, quantity: 34},
      {id: 2, name: 'Printer', price: 1600, quantity: 134},
      {id: 3, name: 'Smartphone', price: 1600, quantity: 34},
      {id: 4, name: 'Keyboard', price: 500, quantity: 20}
    ];
  }

}
