import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArticulosService } from '../../services/articulos.service';
import { Categoria, Horas } from '../../interfaces/interfaces';
import { CartService } from '../../services/cart.service';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page implements OnInit{

@ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
  categorias: Categoria[] = [];
  horariof: Horas[] = [];
  cart = [];
  horarios: any;
  mensajes: any;
//  products = [];
  cartItemCount: BehaviorSubject<number> = new BehaviorSubject(0);
  isLoading = false;

  constructor( private articulosService: ArticulosService,
               private modalCtrl: ModalController,
               public alertController: AlertController,
               public loadingCtrl: LoadingController,
               public loadingController: LoadingController,
               private cartService: CartService, ) {}

ngOnInit(){



  this.articulosService.getArtHorario().subscribe( respuesta => {

    let horas = new Date();
    let horarios = horas.getHours();
    console.log(horarios);
    console.log(respuesta);
    this.horariof = respuesta.posh;
    console.log(this.horariof['entrada'] );
  //  let mensajes = this.horarios['mensaje'];
  //  console.log(mensajes);
//    this.productos.push(...respuesta.post);


  if(horarios>=this.horariof['entrada']  && horarios<=this.horariof['salida'] ){
    this.present();
this.articulosService.getTopHeadlinesCategory()
.subscribe( resp => {
  console.log('articulos', resp);
  //this.noticias = resp.articles;
  this.categorias.push( ...resp.categories );
  this.dismiss();
} );}else {



this.presentAlertagregas();

}

  } );

this.cart = this.cartService.getCart();
this.cartItemCount = this.cartService.getCartItemCount();

 }


 async presentAlertagregas() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: this.horariof['mensaje'],
      subHeader: ':)',

      buttons: ['OK']
    });

    await alert.present();
  }

 async present() {
     this.isLoading = true;
     return await this.loadingController.create({
       // duration: 5000,
     }).then(a => {
       a.present().then(() => {
         console.log('presented');
         if (!this.isLoading) {
           a.dismiss().then(() => console.log('abort presenting'));
         }
       });
     });
   }

   async dismiss() {
     this.isLoading = false;
     return await this.loadingController.dismiss().then(() => console.log('dismissed'));
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
recargar( event ){
//this.siguientes( event, true );

setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
      window.location.reload();
    }, 1000);


}







}
