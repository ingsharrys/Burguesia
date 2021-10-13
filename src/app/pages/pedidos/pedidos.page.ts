import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonSlides, ModalController, AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { ArticulosService } from '../../services/articulos.service';
import { Usuario, Article, Pedidos } from '../../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject } from 'rxjs';
import { DataLocalService } from '../../services/data-local.service';
import { CartService } from '../../services/cart.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { Router } from '@angular/router';



@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  productosCarrito: Article[] = [];

// cart: Article[] = [];
cart: Article[] = [];
carts: Article[] = [];

  pedidos = {
  especi: '',
};
//pedido:any;
  idmas: [];
  platosCarrito: Article[] = [];

  pedidoCartapp = {
  envio: '',
  pago: ''
};
entrega='';
User = { };



items : Array<string>  = new Array<string>();
@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
private cartItemCounts = new BehaviorSubject(0);
//public countdown$ = this.countdownSource.asObservable();
  constructor( private articulosService: ArticulosService,
               private navCtrl: NavController,
               private storage: Storage,
               private cartService: CartService,
               private route: Router,
               private modalCtrl: ModalController,
               private alertCtrl: AlertController,
               public dataLocal: DataLocalService ) { }

  async ngOnInit() {

     this.cart = this.cartService.getCart();
  //  this.productosCarrito = await this.dataLocal.cargarProducto();

    this.mostrarCantidad(this.productosCarrito);

  }

  async pedido( especi: NgForm ) {

console.log(this.pedidos['especi']);

let varobserva = this.pedidos['especi'];

 this.storage.set('observemos', varobserva);
  console.log(varobserva)

  this.route.navigate(['/cart-modal']);
    }


  decreaseCartItem(product) {
      this.cartService.decreaseProduct(product);
    }

    increaseCartItem(product) {
      this.cartService.addProduct(product);
    }

    removeCartItem(product) {
      this.cartService.removeProduct(product);
    }

    getTotal() {
      return this.cart.reduce((i, j) => i + j.tienda_price * j.amount + j.adicionprice0 * j.amounta + j.adicionprice1 * j.amountb + j.adicionprice2 * j.amountc + j.adicionprice3 * j.amountd + j.adicionprice4 * j.amounte + j.adicionprice5 * j.amountf + j.adicionprice6 * j.amountg + j.adicionprice7 * j.amounth + j.adicionprice8 * j.amounti + j.adicionprice9 * j.amountj, 0);

    }

    close() {
      this.modalCtrl.dismiss();
    }

async checkout(fpedido: NgForm) {
      // Perfom PayPal or Stripe checkout process

  console.log(arguments)
  return;
      let iduser = this.storage.get('token').then((result) => {
          console.log('My result', result);
          this.articulosService.getUser(result).subscribe(resp => {
             console.log('articulos', resp);
             this.User = resp.result[0]['password'];
        //    this.User = resp.result[0];
            console.log(this.User);

            if(this.User==0) {
              this.presentAlertclave();
            }


            else{

      console.log(this.cart);
      console.log(this.pedidoCartapp);
      let entrega = this.pedidoCartapp;
  //recuperar    this.articulosService.hacerPedido(entrega, this.cart);
      //this.articulosService.hacerPedidocode(entrega, this.cart);
  // recuperar   this.route.navigateByUrl('/main/tabs/tab3');
      this.presentAlertorden();
/*
let alert = await this.alertCtrl.create({
        header: 'tu orden ha sido tomada :)',
        message: '',
        buttons: ['OK']
      });
      alert.present().then(() => {
      //  this.modalCtrl.dismiss();
      });
      */

}
  });

  });



    }

/*
  });
});
*/

  //  }

  addicionb(product) {

    this.cartService.addicionesdos(product);
  }

  restasb(product) {
      this.cartService.restaProductb(product);
    }

  addicionc(product) {

    this.cartService.addicionestres(product);
  }

  restasc(product) {
      this.cartService.restaProductc(product);
    }

  addiciond(product) {

    this.cartService.addicionescuatro(product);
  }

  restasd(product) {
      this.cartService.restaProductd(product);
    }

  addicione(product) {

    this.cartService.addicionescinco(product);
  }

  restase(product) {
      this.cartService.restaProducte(product);
    }


  addicionf(product) {

    this.cartService.addicionesseis(product);
  }

  restasf(product) {
      this.cartService.restaProductf(product);
    }

  addiciong(product) {

    this.cartService.addicionessiete(product);
  }

  restasg(product) {
      this.cartService.restaProductg(product);
    }

  addicionh(product) {

    this.cartService.addicionesocho(product);
  }

  restash(product) {
      this.cartService.restaProducth(product);
    }

  addicioni(product) {

    this.cartService.addicionesnueve(product);
  }

  restasi(product) {
      this.cartService.restaProducti(product);
    }

  addicionj(product) {

    this.cartService.addicionesdies(product);
  }

  restasj(product) {
      this.cartService.restaProductj(product);
    }

  addicion(product) {
    this.cartService.addiciones(product);
  }

  restas(product) {
      this.cartService.restaProduct(product);
    }






  async presentAlertclave() {
     const alert = await this.alertCtrl.create({
       cssClass: 'my-custom-class',
       header: 'Ir a mi cuenta',
       subHeader: 'y Agregar tu número de contácto',

       buttons: ['OK']
     });

     await alert.present();
   }


   async presentAlertorden() {
      const alert = await this.alertCtrl.create({
        cssClass: 'my-custom-class',
        header: 'tu orden ha sido tomada :)',
        message: '',
        buttons: ['OK']
      });

      await alert.present();

    // recuperar window.location.reload();
    }




    async openCart() {
    //  this.animateCSS('bounceOutLeft', true);

      let modal = await this.modalCtrl.create({
        component: CartModalPage,
        cssClass: 'cart-modal'
      });
      modal.onWillDismiss().then(() => {
        this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      //  this.animateCSS('bounceInLeft');
      });
      modal.present();
    }


async mostrarCantidad( productosCarrito ) {


}

cantidadmenos( idmenos: any ) {

console.log(idmenos);
}


}
