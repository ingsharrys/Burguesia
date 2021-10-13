import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from '../services/articulos.service';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddicService {

  //private cart: Article[] = [];
  private carts: Article[] = [];
  //private cartb: Article[] = [];

  private cartaItemCount = new BehaviorSubject(0);

  //private cartaditionCount = new BehaviorSubject(0);
  private cartaditionCountuno = new BehaviorSubject(0);

data: Article[] = [];


constructor(private articulosService: ArticulosService,
             private http: HttpClient,) { }



getProducts() {
return this.articulosService.getTopHeadlines();
//  return this.data;
  }


getCarts() {
return this.carts[0];
console.log(this.carts[0]);
}

getCartItemCount() {
return this.cartaditionCountuno;
}

getCartItemCountuno() {
return this.cartaditionCountuno;
}

getCartItemCountdos() {
return this.cartaditionCountuno;
}

addProduct(product) {
let added = false;
for (let p of this.carts) {
if (p.nid === product.nid) {
  p.amounta += 1;
  console.log(this.carts[0]['amounta']);
  added = true;
  break;
}
}
if (!added) {
product.amounta = 1;
this.carts.push(product);
console.log(product);
}
this.cartaditionCountuno.next(this.cartaditionCountuno.value + 1);
}

decreaseProduct(product) {

for (let [index, p] of this.carts.entries()) {
if (p.nid === product.nid) {
  p.amounta -= 1;
  if (p.amounta == 0) {
    this.carts.splice(index, 1);
  }
}
}
this.cartaItemCount.next(this.cartaItemCount.value - 1);
}

removeProduct(product) {
for (let [index, p] of this.carts.entries()) {
if (p.nid === product.nid) {
  this.cartaItemCount.next(this.cartaItemCount.value - p.amounta);
  this.carts.splice(index, 1);
}
}
}




removeTotal(product) {


for (let [index, p] of this.carts.entries()) {
//  console.log(product[p]["nid"] );
//  if (p.nid === product.nid) {
    this.cartaItemCount.next(this.cartaItemCount.value - p.amounta);
    this.carts.splice(index, 1);

//  }
}

for (let [index, p] of this.carts.entries()) {
//  console.log(product[p]["nid"] );
//  if (p.nid === product.nid) {
    this.cartaItemCount.next(this.cartaItemCount.value - p.amounta);

    this.carts.splice(index);
//  }
}


}

}
