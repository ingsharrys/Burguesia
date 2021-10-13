import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { ArticulosService } from '../../services/articulos.service';
import { IonLoaderService } from '../../services/ion-loader.service';
import { ActivatedRoute } from '@angular/router';
import { ModalController, LoadingController } from '@ionic/angular';
import { RespuestaTopHeadlines } from '../../interfaces/interfaces';
import { CartModalPage } from '../cart-modal/cart-modal.page';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {
  loading: HTMLIonLoadingElement;
  @ViewChild('cart', {static: false, read: ElementRef})fab: ElementRef;
products: Article[] = [];
parameter2: string;
//category: UserList:any[];
isLoading = false;
  constructor(private articulosService: ArticulosService,
              private modalCtrl: ModalController,
              private cartService: CartService,
              public loadingController: LoadingController,
              private ionLoaderService: IonLoaderService,
              private route: ActivatedRoute,) { }

  ngOnInit(){

    let idp = this.route.snapshot.paramMap.get('idp');
    console.log(idp);
     this.cargarproductos(idp);
   this.parameter2 = idp;

this.present();

   }

   cargarproductos(idp:string) {


     this.articulosService.getTopHeadlinesCategorypost(idp)
     .subscribe( resp => {


         this.dismiss();

       console.log('articulos', resp);
       console.log(resp['count']);  //   this.category = resp.categories;
    //   console.log(resp.category);
       this.products.push( ...resp.posts );

     } );

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



}
