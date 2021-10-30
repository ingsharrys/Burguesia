import { Component, OnInit  } from '@angular/core';
import { Usuario, Article, Pedidos } from '../../interfaces/interfaces';
import { CartService } from '../../services/cart.service';
import { ModalController, AlertController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { ArticulosService } from '../../services/articulos.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  cart: Article[] = [];
//@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  constructor(
    private alertCtrl: AlertController,
    private route: Router,
    private articulosService: ArticulosService,
    private cartService: CartService,

  ) {}

  ngOnInit(){

    this.cart = this.cartService.getCart();
    console.log(this.cart);
  }

  private async checkout(paymentMethod = 'Efectivo'){
    try {
      const order = await this.articulosService.hacerPedidocode(this.cart, paymentMethod);
      this.cartService.resetShoppingCart();
      this.route.navigateByUrl('/tab2');
      this.presentAlertorden();
    }catch(err) {
      console.warn('error realizando el pedido ', err)
    };


  }

  addToEfectivo () {
    this.checkout('Efectivo')
  }

  addToTarjeta(){
    this.checkout('Tarjeta');
    //  this.cartService.decreaseProduct(product);
  }



      async presentAlertorden() {
         const alert = await this.alertCtrl.create({
           cssClass: 'my-custom-class',
           header: 'tu orden ha sido tomada :)',
           message: '',
           buttons: ['OK']
         });

        await alert.present();
        await alert.onDidDismiss();
       }


}
