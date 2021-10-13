import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from '../services/articulos.service';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AddicunoService {
  //private cart: Article[] = [];
  private carts: Article[] = [];
  private cartb: Article[] = [];

  private cartbItemCount = new BehaviorSubject(0);

  private cartbditionCount = new BehaviorSubject(0);
  private cartbditionCountdos = new BehaviorSubject(0);

  data: Article[] = [];
  constructor(private articulosService: ArticulosService,
               private http: HttpClient,) { }



  getProducts() {
  return this.articulosService.getTopHeadlines();
  //  return this.data;
    }


  getCartb() {
  return this.cartb;
  }

  getCartItemCount() {
  return this.cartbItemCount;
  }

  getCartItemCountuno() {
  return this.cartbditionCount;
  }

  getCartItemCountdos() {
  return this.cartbditionCountdos;
  }

  addProduct(product) {
  let added = false;
  for (let p of this.carts) {
  if (p.nid === product.nid) {
    p.amountb += 1;
    console.log(product);
    added = true;
    break;
  }
  }
  if (!added) {
  product.amountb = 1;
  this.carts.push(product);
  console.log(product);
  }
  this.cartbItemCount.next(this.cartbItemCount.value + 1);
  }

  decreaseProduct(product) {

  for (let [index, p] of this.carts.entries()) {
  if (p.nid === product.nid) {
    p.amountb -= 1;
    if (p.amountb == 0) {
      this.carts.splice(index, 1);
    }
  }
  }
  this.cartbItemCount.next(this.cartbItemCount.value - 1);
  }

  removeProduct(product) {
  for (let [index, p] of this.carts.entries()) {
  if (p.nid === product.nid) {
    this.cartbItemCount.next(this.cartbItemCount.value - p.amountb);
    this.carts.splice(index, 1);
  }
  }
  }




  removeTotal(product) {


  for (let [index, p] of this.carts.entries()) {
  //  console.log(product[p]["nid"] );
  //  if (p.nid === product.nid) {
      this.cartbItemCount.next(this.cartbItemCount.value - p.amountb);
      this.carts.splice(index, 1);

  //  }
  }

  for (let [index, p] of this.carts.entries()) {
  //  console.log(product[p]["nid"] );
  //  if (p.nid === product.nid) {
      this.cartbItemCount.next(this.cartbItemCount.value - p.amountb);

      this.carts.splice(index);
  //  }
  }


  }

  }
