import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ArticulosService } from '../services/articulos.service';
import { Article, RespuestaTopHeadlines } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class CartService {

    //adicional 1
    //private carts: Article[] = [];
  //  private cartaItemCount = new BehaviorSubject(0);
    //private cartaditionCountuno = new BehaviorSubject(0);
    //fin adicional 1



    private cart: Article[] = [];
    private carts: Article[] = [];
    private cartb: Article[] = [];
    private cartc: Article[] = [];
    private cartd: Article[] = [];
    private carte: Article[] = [];
    private cartf: Article[] = [];
    private cartg: Article[] = [];
    private carth: Article[] = [];
    private carti: Article[] = [];
    private cartj: Article[] = [];
    private cartItemCount = new BehaviorSubject(0);
    private cartItemCounts = new BehaviorSubject(0);
    private cartItemCountsdos = new BehaviorSubject(0);
    private cartItemCountstres = new BehaviorSubject(0);
    private cartItemCountscuatro = new BehaviorSubject(0);
    private cartItemCountscinco = new BehaviorSubject(0);
    private cartItemCountsseis = new BehaviorSubject(0);
    private cartItemCountssiete = new BehaviorSubject(0);
    private cartItemCountsocho = new BehaviorSubject(0);
    private cartItemCountsnueve = new BehaviorSubject(0);
    private cartItemCountsdies = new BehaviorSubject(0);
 //data: Article[] = [];


  constructor(private articulosService: ArticulosService,
               private http: HttpClient,) { }



  getProducts() {
  return this.articulosService.getTopHeadlines();
  //return this.data;
    }


    getCart() {
    return this.cart;
    }


getCartItemCount() {
return this.cartItemCount;
}
/*
getCartItemCountuno() {
return this.cartaditionCount;
}

getCartItemCountdos() {
return this.cartaditionCountuno;
}
*/
addProduct(product) {
let added = false;

for (let p of this.cart) {
  if (p.nid === product.nid) {
    p.amount += 1;
    
    console.log(product);
    added = true;
    break;
  }
}
if (!added) {
  product.amount = 1;
  this.cart.push(product);
  console.log(product);
}
this.cartItemCount.next(this.cartItemCount.value + 1);
}

decreaseProduct(product) {

for (let [index, p] of this.cart.entries()) {
  if (p.nid === product.nid) {
    p.amount -= 1;
    if (p.amount == 0) {
      this.cart.splice(index, 1);
    }
  }
}
this.cartItemCount.next(this.cartItemCount.value - 1);
}

removeProduct(product) {
for (let [index, p] of this.cart.entries()) {
  if (p.nid === product.nid) {
    this.cartItemCount.next(this.cartItemCount.value - p.amount);
    this.cart.splice(index, 1);
  }
}
}


addicionesdos(product) {
let addeds = false;
console.log(product);
if (product.amountb >= 1) {
for (let p of this.cartb) {
  if (p.nid === product.nid) {
    p.amountb += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountb < 1) {
  product.amountb = 1;
  this.cartb.push(product);
  console.log(product);
}


this.cartItemCountsdos.next(this.cartItemCountsdos.value + 1);
}

restaProductb(product) {

for (let [index, p] of this.cartb.entries()) {
  if (p.nid === product.nid) {
    p.amountb -= 1;
    if (p.amountb == 0) {
      this.cartb.splice(index, 1);
    }
  }
}
this.cartItemCountsdos.next(this.cartItemCountsdos.value - 1);
}



addicionestres(product) {
let addeds = false;
console.log(product);
if (product.amountc >= 1) {
for (let p of this.cartc) {
  if (p.nid === product.nid) {
    p.amountc += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountc < 1) {
  product.amountc = 1;
  this.cartc.push(product);
  console.log(product);
}


this.cartItemCountstres.next(this.cartItemCountstres.value + 1);
}


restaProductc(product) {

for (let [index, p] of this.cartc.entries()) {
  if (p.nid === product.nid) {
    p.amountc -= 1;
    if (p.amountc == 0) {
      this.cartc.splice(index, 1);
    }
  }
}
this.cartItemCountstres.next(this.cartItemCountstres.value - 1);
}



addicionescuatro(product) {
let addeds = false;
console.log(product);
if (product.amountd >= 1) {
for (let p of this.cartd) {
  if (p.nid === product.nid) {
    p.amountd += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountd < 1) {
  product.amountd = 1;
  this.cartd.push(product);
  console.log(product);
}


this.cartItemCountscuatro.next(this.cartItemCountscuatro.value + 1);
}



restaProductd(product) {

for (let [index, p] of this.cartd.entries()) {
  if (p.nid === product.nid) {
    p.amountd -= 1;
    if (p.amountd == 0) {
      this.cartd.splice(index, 1);
    }
  }
}
this.cartItemCountscuatro.next(this.cartItemCountscuatro.value - 1);
}


addicionescinco(product) {
let addeds = false;
console.log(product);
if (product.amounte >= 1) {
for (let p of this.carte) {
  if (p.nid === product.nid) {
    p.amounte += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amounte < 1) {
  product.amounte = 1;
  this.carte.push(product);
  console.log(product);
}


this.cartItemCountscinco.next(this.cartItemCountscinco.value + 1);
}


restaProducte(product) {

for (let [index, p] of this.carte.entries()) {
  if (p.nid === product.nid) {
    p.amounte -= 1;
    if (p.amounte == 0) {
      this.carte.splice(index, 1);
    }
  }
}
this.cartItemCountscinco.next(this.cartItemCountscinco.value - 1);
}



addicionesseis(product) {
let addeds = false;
console.log(product);
if (product.amountf >= 1) {
for (let p of this.cartf) {
  if (p.nid === product.nid) {
    p.amountf += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountf < 1) {
  product.amountf = 1;
  this.cartf.push(product);
  console.log(product);
}


this.cartItemCountsseis.next(this.cartItemCountsseis.value + 1);
}

restaProductf(product) {

for (let [index, p] of this.cartf.entries()) {
  if (p.nid === product.nid) {
    p.amountf -= 1;
    if (p.amountf == 0) {
      this.cartf.splice(index, 1);
    }
  }
}
this.cartItemCountsseis.next(this.cartItemCountsseis.value - 1);
}


addicionessiete(product) {
let addeds = false;
console.log(product);
if (product.amountg >= 1) {
for (let p of this.cartg) {
  if (p.nid === product.nid) {
    p.amountg += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountg < 1) {
  product.amountg = 1;
  this.cartg.push(product);
  console.log(product);
}


this.cartItemCountssiete.next(this.cartItemCountssiete.value + 1);
}


restaProductg(product) {

for (let [index, p] of this.cartg.entries()) {
  if (p.nid === product.nid) {
    p.amountg -= 1;
    if (p.amountg == 0) {
      this.cartg.splice(index, 1);
    }
  }
}
this.cartItemCountssiete.next(this.cartItemCountssiete.value - 1);
}


addicionesocho(product) {
let addeds = false;
console.log(product);
if (product.amounth >= 1) {
for (let p of this.carth) {
  if (p.nid === product.nid) {
    p.amounth += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amounth < 1) {
  product.amounth = 1;
  this.carth.push(product);
  console.log(product);
}


this.cartItemCountsocho.next(this.cartItemCountsocho.value + 1);
}

restaProducth(product) {

for (let [index, p] of this.carth.entries()) {
  if (p.nid === product.nid) {
    p.amounth -= 1;
    if (p.amounth == 0) {
      this.carth.splice(index, 1);
    }
  }
}
this.cartItemCountsocho.next(this.cartItemCountsocho.value - 1);
}


addicionesnueve(product) {
let addeds = false;
console.log(product);
if (product.amounti >= 1) {
for (let p of this.carti) {
  if (p.nid === product.nid) {
    p.amounti += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amounti < 1) {
  product.amounti = 1;
  this.carti.push(product);
  console.log(product);
}


this.cartItemCountsnueve.next(this.cartItemCountsnueve.value + 1);
}


restaProducti(product) {

for (let [index, p] of this.carti.entries()) {
  if (p.nid === product.nid) {
    p.amounti -= 1;
    if (p.amounti == 0) {
      this.carti.splice(index, 1);
    }
  }
}
this.cartItemCountsnueve.next(this.cartItemCountsnueve.value - 1);
}



addicionesdies(product) {
let addeds = false;
console.log(product);
if (product.amountj >= 1) {
for (let p of this.cartj) {
  if (p.nid === product.nid) {
    p.amountj += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amountj < 1) {
  product.amountj = 1;
  this.cartj.push(product);
  console.log(product);
}


this.cartItemCountsdies.next(this.cartItemCountsdies.value + 1);
}


restaProductj(product) {

for (let [index, p] of this.cartj.entries()) {
  if (p.nid === product.nid) {
    p.amountj -= 1;
    if (p.amountj == 0) {
      this.cartj.splice(index, 1);
    }
  }
}
this.cartItemCountsdies.next(this.cartItemCountsdies.value - 1);
}



addiciones(product) {
let addeds = false;

if (product.amounta >= 1) {
for (let p of this.carts) {
  if (p.nid === product.nid) {
    p.amounta += 1;
    console.log(product);
    addeds = true;
    break;
  }  }
}

if (product.amounta < 1) {
  product.amounta = 1;
  this.carts.push(product);
  console.log(product);
}


this.cartItemCounts.next(this.cartItemCounts.value + 1);
}




restaProduct(product) {

for (let [index, p] of this.carts.entries()) {
  if (p.nid === product.nid) {
    p.amounta -= 1;
    if (p.amounta == 0) {
      this.carts.splice(index, 1);
    }
  }
}
this.cartItemCounts.next(this.cartItemCounts.value - 1);
}




/*

cargaradicionales(productos){
let adicion = productos['adicion0'];
let nids = productos['nid'];
console.log(adicion);
console.log(nids);

  let added = false;
  for (let p of this.carts) {
    if (p.nid === productos.nid) {
      p.amounta += 1;
      console.log(productos);
      added = true;
      break;
    }
  }
  if (!added) {
    productos.amounta = 1;
    this.carts.push(productos);
    console.log(productos);
  }
  this.cartaditionCount.next(this.cartaditionCount.value + 1);

//this.storage.set(productos['adicion0'],1);

}


cargaradicionalesuno(productos){
let adicion = productos['adicion1'];
let nids = productos['nid'];
console.log(adicion);
console.log(nids);

  let added = false;
  for (let p of this.cartb) {
    if (p.nid === productos.nid) {
      p.amountb += 1;
      console.log(productos);
      added = true;
      break;
    }
  }
  if (!added) {
    productos.amountb = 1;
    this.cartb.push(productos);
    console.log(productos);
  }
  this.cartaditionCountuno.next(this.cartaditionCountuno.value + 1);

//this.storage.set(productos['adicion0'],1);

}
*/



removeTotal(product) {


  for (let [index, p] of this.cart.entries()) {
  //  console.log(product[p]["nid"] );
  //  if (p.nid === product.nid) {
      this.cartItemCount.next(this.cartItemCount.value - p.amount);
      this.cart.splice(index, 1);

  //  }
  }

  for (let [index, p] of this.cart.entries()) {
  //  console.log(product[p]["nid"] );
  //  if (p.nid === product.nid) {
      this.cartItemCount.next(this.cartItemCount.value - p.amount);

      this.cart.splice(index);
  //  }
  }


}

}
