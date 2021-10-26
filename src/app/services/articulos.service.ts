import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { RespuestaTopHeadlines, Usuario } from '../interfaces/interfaces';
import { NavController, AlertController, ModalController, LoadingController   } from '@ionic/angular';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';
import { Article, Pedidos } from '../interfaces/interfaces';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
//import { CartService } from './cart.service';
const apikey = environment.apikey;
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  endpoint = 'https://laburguesianeiva.com/admin/api/';


cart: Article[] = [];
pedido: Pedidos[] = [];
token: string = null;
cuentos: Article[] = [];
todosproductos:{ };
isLoading = false;
  constructor( private http: HttpClient,
               private storage: Storage,
               private navCtrl: NavController,
               private router: Router,
               private modalCtrl: ModalController,
               public loadingController: LoadingController,
              // private cartService: CartService,
               public alertController: AlertController ) { }


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

getTopHeadlines(){
 //return this.ejecutarQuery(`/get_recent_posts`);
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_recent_posts/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8`);
}

getTopHeadlinesCategory(){
 //return this.ejecutarQuery(`/get_recent_posts`);
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_category_index/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8`);
}

getTopHeadlinesCategorypost(idp:string){
 //return this.ejecutarQuery(`/get_recent_posts`);
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_category_posts/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&id=${idp}&count=30`);
}

getTopHeadlinesdestacado(){
 //return this.ejecutarQuery(`/get_recent_posts`);
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_dest_post/?api_key=cda11rbycGLDVae49pzBCI0QuY5RsHFONkxMUvKwZ7SWXA8gfq&count=1`);
}

getArtHeadlines( id:string ){
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_post_detail/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&id=${id}`);
}

getArtHorario(  ){
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_open_detail/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&id=1`);
}


getCommentHeadlines( id:string ){

  let iduser = this.storage.get('token').then((result) => {
 return this.http.get<RespuestaTopHeadlines>(`https://sharrys.com/admin/api/get_comments/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&nid=${id}&user_id=${iduser}`);

   });
}

hacerPedido(cart){


  console.log(cart[0]['news_title']);
  console.log(cart);
  console.log(cart['length']);
  //  let texto: string = JSON.stringify(cart);
  //  console.log(texto);


  let idusers = this.storage.get('token').then((result) => {
    let observaf = this.storage.get('observemos').then((resulta) => {
    console.log(result);

    let todosproductos = [];
    console.log(todosproductos);
    for (let i = 0; i <= cart['length']-1; i++) {
         todosproductos.push(cart[i]['news_title']);
    }

    let preciosproductos = [];
    console.log(preciosproductos);
    for (let i = 0; i <= cart['length']-1; i++) {
         preciosproductos.push(cart[i]['tienda_price']);
    }

    let cantproductos = [];
    console.log(cantproductos);
    for (let i = 0; i <= cart['length']-1; i++) {
         cantproductos.push(cart[i]['amount']);
    }
  //adicional 1
    let adicionuno = [];
    console.log(adicionuno);
    for (let i = 0; i <= cart['length']-1; i++) {
         adicionuno.push(cart[i]['adicion0']);
    }

    let adicioncantuno = [];
    console.log(adicioncantuno);
    for (let i = 0; i <= cart['length']-1; i++) {
         adicioncantuno.push(cart[i]['amounta']);
    }

    let adicionpreciouno = [];
    console.log(adicionpreciouno);
    for (let i = 0; i <= cart['length']-1; i++) {
         adicionpreciouno.push(cart[i]['adicionprice0']);
    }
    //adicional 2
      let adiciondos = [];
      console.log(adiciondos);
      for (let i = 0; i <= cart['length']-1; i++) {
           adiciondos.push(cart[i]['adicion1']);
      }

      let adicioncantdos = [];
      console.log(adicioncantdos);
      for (let i = 0; i <= cart['length']-1; i++) {
           adicioncantdos.push(cart[i]['amountb']);
      }

      let adicionpreciodos = [];
      console.log(adicionpreciodos);
      for (let i = 0; i <= cart['length']-1; i++) {
           adicionpreciodos.push(cart[i]['adicionprice1']);
      }


      //adicional 3
        let adiciontres = [];
        console.log(adiciontres);
        for (let i = 0; i <= cart['length']-1; i++) {
             adiciontres.push(cart[i]['adicion2']);
        }

        let adicioncanttres = [];
        console.log(adicioncanttres);
        for (let i = 0; i <= cart['length']-1; i++) {
             adicioncanttres.push(cart[i]['amountc']);
        }

        let adicionpreciotres = [];
        console.log(adicionpreciotres);
        for (let i = 0; i <= cart['length']-1; i++) {
             adicionpreciotres.push(cart[i]['adicionprice2']);
        }


        //adicional 4
          let adicioncuatro = [];
          console.log(adicioncuatro);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicioncuatro.push(cart[i]['adicion3']);
          }

          let adicioncantcuatro = [];
          console.log(adicioncantcuatro);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicioncantcuatro.push(cart[i]['amountd']);
          }

          let adicionpreciocuatro = [];
          console.log(adicionpreciocuatro);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicionpreciocuatro.push(cart[i]['adicionprice3']);
          }


          //adicional 5
            let adicioncinco = [];
            console.log(adicioncinco);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicioncinco.push(cart[i]['adicion4']);
            }

            let adicioncantcinco = [];
            console.log(adicioncantcinco);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicioncantcinco.push(cart[i]['amounte']);
            }

            let adicionpreciocinco = [];
            console.log(adicionpreciocinco);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicionpreciocinco.push(cart[i]['adicionprice4']);
            }


            //adicional 6
              let adicionseis = [];
              console.log(adicionseis);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicionseis.push(cart[i]['adicion5']);
              }

              let adicioncantseis = [];
              console.log(adicioncantseis);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicioncantseis.push(cart[i]['amountf']);
              }

              let adicionprecioseis = [];
              console.log(adicionprecioseis);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicionprecioseis.push(cart[i]['adicionprice5']);
              }


              //adicional 7
                let adicionsiete = [];
                console.log(adicionsiete);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicionsiete.push(cart[i]['adicion6']);
                }

                let adicioncantsiete = [];
                console.log(adicioncantsiete);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicioncantsiete.push(cart[i]['amountg']);
                }

                let adicionpreciosiete = [];
                console.log(adicionpreciosiete);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicionpreciosiete.push(cart[i]['adicionprice6']);
                }

                //adicional 8
                  let adicionocho = [];
                  console.log(adicionocho);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicionocho.push(cart[i]['adicion7']);
                  }

                  let adicioncantocho = [];
                  console.log(adicioncantocho);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicioncantocho.push(cart[i]['amounth']);
                  }

                  let adicionprecioocho = [];
                  console.log(adicionprecioocho);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicionprecioocho.push(cart[i]['adicionprice7']);
                  }


                  //adicional 9
                    let adicionnueve = [];
                    console.log(adicionnueve);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adicionnueve.push(cart[i]['adicion8']);
                    }

                    let adicioncantnueve = [];
                    console.log(adicioncantnueve);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adicioncantnueve.push(cart[i]['amounti']);
                    }

                    let adicionprecionueve = [];
                    console.log(adicionprecionueve);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adicionprecionueve.push(cart[i]['adicionprice8']);
                    }


                    //adicional 10
                      let adiciondiez = [];
                      console.log(adiciondiez);
                      for (let i = 0; i <= cart['length']-1; i++) {
                           adiciondiez.push(cart[i]['adicion9']);
                      }

                      let adicioncantdiez = [];
                      console.log(adicioncantdiez);
                      for (let i = 0; i <= cart['length']-1; i++) {
                           adicioncantdiez.push(cart[i]['amountj']);
                      }

                      let adicionpreciodiez = [];
                      console.log(adicionpreciodiez);
                      for (let i = 0; i <= cart['length']-1; i++) {
                           adicionpreciodiez.push(cart[i]['adicionprice9']);
                      }


  //  this.todosproducto = cart[i]["nid"];


  const response = this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_user_pedidocode/?api_key=cda11rbycGLDVae49pzBCI0QuY5RsHFONkxMUvKwZ7SWXA8gfq&id=${result}&code=${todosproductos}&price=${preciosproductos}&buc=${cart['length']}&canrprod=${cantproductos}&adicionone=${adicionuno}&adicioncantone=${adicioncantuno}&adicionprecione=${adicionpreciouno}&adiciondos=${adiciondos}&adicioncantdos=${adicioncantdos}&adicionprecidos=${adicionpreciodos}&adiciontres=${adiciontres}&adicioncanttres=${adicioncanttres}&adicionprecitres=${adicionpreciotres}&adicioncuatro=${adicioncuatro}&adicioncantcuatro=${adicioncantcuatro}&adicionprecicuatro=${adicionpreciocuatro}&adicioncinco=${adicioncinco}&adicioncantcinco=${adicioncantcinco}&adicionprecicinco=${adicionpreciocinco}&adicionseis=${adicionseis}&adicioncantseis=${adicioncantseis}&adicionpreciseis=${adicionprecioseis}&adicionsiete=${adicionsiete}&adicioncantsiete=${adicioncantsiete}&adicionprecisiete=${adicionpreciosiete}&adicionocho=${adicionocho}&adicioncantocho=${adicioncantocho}&adicionpreciocho=${adicionprecioocho}&adicionnueve=${adicionnueve}&adicioncantnueve=${adicioncantnueve}&adicionprecinueve=${adicionprecionueve}&adiciondiez=${adiciondiez}&adicioncantdiez=${adicioncantdiez}&adicionprecidiez=${adicionpreciodiez}&mpago=Terjeta&detallespedi=${resulta}`)
       .subscribe( resp => {
       console.log(resp)

      });

});


   });

this.router.navigateByUrl('/tab2');

}



hacerPedidocode(cart){




console.log(cart[0]['news_title']);
console.log(cart);
console.log(cart['length']);
//  let texto: string = JSON.stringify(cart);
//  console.log(texto);


let idusers = this.storage.get('token').then((result) => {
let observaf = this.storage.get('observemos').then((resulta) => {
  console.log(result);

  let todosproductos = [];
  console.log(todosproductos);
  for (let i = 0; i <= cart['length']-1; i++) {
       todosproductos.push(cart[i]['news_title']);
  }

  let preciosproductos = [];
  console.log(preciosproductos);
  for (let i = 0; i <= cart['length']-1; i++) {
       preciosproductos.push(cart[i]['tienda_price']);
  }

  let cantproductos = [];
  console.log(cantproductos);
  for (let i = 0; i <= cart['length']-1; i++) {
       cantproductos.push(cart[i]['amount']);
  }
//adicional 1
  let adicionuno = [];
  console.log(adicionuno);
  for (let i = 0; i <= cart['length']-1; i++) {
       adicionuno.push(cart[i]['adicion0']);
  }

  let adicioncantuno = [];
  console.log(adicioncantuno);
  for (let i = 0; i <= cart['length']-1; i++) {
       adicioncantuno.push(cart[i]['amounta']);
  }

  let adicionpreciouno = [];
  console.log(adicionpreciouno);
  for (let i = 0; i <= cart['length']-1; i++) {
       adicionpreciouno.push(cart[i]['adicionprice0']);
  }
  //adicional 2
    let adiciondos = [];
    console.log(adiciondos);
    for (let i = 0; i <= cart['length']-1; i++) {
         adiciondos.push(cart[i]['adicion1']);
    }

    let adicioncantdos = [];
    console.log(adicioncantdos);
    for (let i = 0; i <= cart['length']-1; i++) {
         adicioncantdos.push(cart[i]['amountb']);
    }

    let adicionpreciodos = [];
    console.log(adicionpreciodos);
    for (let i = 0; i <= cart['length']-1; i++) {
         adicionpreciodos.push(cart[i]['adicionprice1']);
    }


    //adicional 3
      let adiciontres = [];
      console.log(adiciontres);
      for (let i = 0; i <= cart['length']-1; i++) {
           adiciontres.push(cart[i]['adicion2']);
      }

      let adicioncanttres = [];
      console.log(adicioncanttres);
      for (let i = 0; i <= cart['length']-1; i++) {
           adicioncanttres.push(cart[i]['amountc']);
      }

      let adicionpreciotres = [];
      console.log(adicionpreciotres);
      for (let i = 0; i <= cart['length']-1; i++) {
           adicionpreciotres.push(cart[i]['adicionprice2']);
      }


      //adicional 4
        let adicioncuatro = [];
        console.log(adicioncuatro);
        for (let i = 0; i <= cart['length']-1; i++) {
             adicioncuatro.push(cart[i]['adicion3']);
        }

        let adicioncantcuatro = [];
        console.log(adicioncantcuatro);
        for (let i = 0; i <= cart['length']-1; i++) {
             adicioncantcuatro.push(cart[i]['amountd']);
        }

        let adicionpreciocuatro = [];
        console.log(adicionpreciocuatro);
        for (let i = 0; i <= cart['length']-1; i++) {
             adicionpreciocuatro.push(cart[i]['adicionprice3']);
        }


        //adicional 5
          let adicioncinco = [];
          console.log(adicioncinco);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicioncinco.push(cart[i]['adicion4']);
          }

          let adicioncantcinco = [];
          console.log(adicioncantcinco);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicioncantcinco.push(cart[i]['amounte']);
          }

          let adicionpreciocinco = [];
          console.log(adicionpreciocinco);
          for (let i = 0; i <= cart['length']-1; i++) {
               adicionpreciocinco.push(cart[i]['adicionprice4']);
          }


          //adicional 6
            let adicionseis = [];
            console.log(adicionseis);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicionseis.push(cart[i]['adicion5']);
            }

            let adicioncantseis = [];
            console.log(adicioncantseis);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicioncantseis.push(cart[i]['amountf']);
            }

            let adicionprecioseis = [];
            console.log(adicionprecioseis);
            for (let i = 0; i <= cart['length']-1; i++) {
                 adicionprecioseis.push(cart[i]['adicionprice5']);
            }


            //adicional 7
              let adicionsiete = [];
              console.log(adicionsiete);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicionsiete.push(cart[i]['adicion6']);
              }

              let adicioncantsiete = [];
              console.log(adicioncantsiete);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicioncantsiete.push(cart[i]['amountg']);
              }

              let adicionpreciosiete = [];
              console.log(adicionpreciosiete);
              for (let i = 0; i <= cart['length']-1; i++) {
                   adicionpreciosiete.push(cart[i]['adicionprice6']);
              }

              //adicional 8
                let adicionocho = [];
                console.log(adicionocho);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicionocho.push(cart[i]['adicion7']);
                }

                let adicioncantocho = [];
                console.log(adicioncantocho);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicioncantocho.push(cart[i]['amounth']);
                }

                let adicionprecioocho = [];
                console.log(adicionprecioocho);
                for (let i = 0; i <= cart['length']-1; i++) {
                     adicionprecioocho.push(cart[i]['adicionprice7']);
                }


                //adicional 9
                  let adicionnueve = [];
                  console.log(adicionnueve);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicionnueve.push(cart[i]['adicion8']);
                  }

                  let adicioncantnueve = [];
                  console.log(adicioncantnueve);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicioncantnueve.push(cart[i]['amounti']);
                  }

                  let adicionprecionueve = [];
                  console.log(adicionprecionueve);
                  for (let i = 0; i <= cart['length']-1; i++) {
                       adicionprecionueve.push(cart[i]['adicionprice8']);
                  }


                  //adicional 10
                    let adiciondiez = [];
                    console.log(adiciondiez);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adiciondiez.push(cart[i]['adicion9']);
                    }

                    let adicioncantdiez = [];
                    console.log(adicioncantdiez);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adicioncantdiez.push(cart[i]['amountj']);
                    }

                    let adicionpreciodiez = [];
                    console.log(adicionpreciodiez);
                    for (let i = 0; i <= cart['length']-1; i++) {
                         adicionpreciodiez.push(cart[i]['adicionprice9']);
                    }


//  this.todosproducto = cart[i]["nid"];


     const response = this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_user_pedidocode/?api_key=cda11rbycGLDVae49pzBCI0QuY5RsHFONkxMUvKwZ7SWXA8gfq&id=${result}&code=${todosproductos}&price=${preciosproductos}&buc=${cart['length']}&canrprod=${cantproductos}&adicionone=${adicionuno}&adicioncantone=${adicioncantuno}&adicionprecione=${adicionpreciouno}&adiciondos=${adiciondos}&adicioncantdos=${adicioncantdos}&adicionprecidos=${adicionpreciodos}&adiciontres=${adiciontres}&adicioncanttres=${adicioncanttres}&adicionprecitres=${adicionpreciotres}&adicioncuatro=${adicioncuatro}&adicioncantcuatro=${adicioncantcuatro}&adicionprecicuatro=${adicionpreciocuatro}&adicioncinco=${adicioncinco}&adicioncantcinco=${adicioncantcinco}&adicionprecicinco=${adicionpreciocinco}&adicionseis=${adicionseis}&adicioncantseis=${adicioncantseis}&adicionpreciseis=${adicionprecioseis}&adicionsiete=${adicionsiete}&adicioncantsiete=${adicioncantsiete}&adicionprecisiete=${adicionpreciosiete}&adicionocho=${adicionocho}&adicioncantocho=${adicioncantocho}&adicionpreciocho=${adicionprecioocho}&adicionnueve=${adicionnueve}&adicioncantnueve=${adicioncantnueve}&adicionprecinueve=${adicionprecionueve}&adiciondiez=${adiciondiez}&adicioncantdiez=${adicioncantdiez}&adicionprecidiez=${adicionpreciodiez}&mpago=Efectivo&detallespedi=${resulta}`)
          .subscribe( resp => {
               console.log(resp);

          }, error => console.log(error));

     });


 });

this.router.navigateByUrl('/tab2');

}



getUser( result ){
console.log(result);
 return this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_user_profile/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&id=${result}`);

}


login( email: string, password: string ){
//const data = { email, password };
this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/get_user_login/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&email=${email}&password=${password}`)
.subscribe( resp => {
//console.log(resp);
 this.storage.set('token', resp['result']['0']['user_id']);
//console.log(resp['result']['0']['name']);
console.log(resp['result']['0']['user_id']);
console.log(resp);

if( resp['result']['0']['ok'] == 'true' ){
  this.navCtrl.navigateRoot( '/main/tabs/tab1' );

}else{

this.presentAlertMultipleButtons();
}

});

 }

 async presentAlertMultipleButtons() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Usuario o Contraseña incorrecta',
      subHeader: 'Pruebe de nuevo',

      buttons: ['OK']
    });

    await alert.present();
  }



  cambiarDatosuser( usuario: Usuario ) {

  console.log( usuario['address'] );

  const direcciones = usuario['address'];
  console.log(direcciones.replace(/[^a-zA-Z0-9 ]/g, " "));



  this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/update_user_data/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&id=${usuario['user_id']}&email=${usuario['email']}&name=${usuario['nombre']}&password=${usuario['password']}&direccion=${direcciones.replace(/[^a-zA-Z0-9- ]/g, " ")}`)
  .subscribe( resp => {
  console.log(resp);


});
//  this.navCtrl.navigateRoot( '/tab3' );
  this.router.navigate(['/tab3'])
//this.modalCtrl.dismiss();
  }






registro( usuario: Usuario ) {

console.log( usuario['email'] );
const direccionesdos = usuario['address'];
console.log(direccionesdos.replace(/[^a-zA-Z0-9 ]/g, " "));

this.http.get<RespuestaTopHeadlines>(`https://laburguesianeiva.com/admin/api/user_register/?api_key=cda11TS0RMhauHAO7tsyfPEC9DGWVqoJ14mgxbZFd2YXBN3ne8&email=${usuario['email']}&name=${usuario['nombre']}&password=${usuario['password']}&direccion=${direccionesdos.replace(/[^a-zA-Z0-9 ]/g, " ")}`)
.subscribe( resp => {
console.log(resp['result']['0']['user_id']);

 this.storage.set('token', resp['result']['0']['user_id']);
//console.log(resp['result']['0']['name']);
console.log(resp['result']['0']['user_id']);
console.log(resp);

if( resp['result']['0']['ok'] == 'true' ){
  //this.navCtrl.navigateRoot( '/tab3' );
  this.router.navigate(['/tab3'])

}else{

this.presentAlertMultipleButtons();
}

});

}


/*
  async guardarToken( user_id: string ) {

this.token = user_id;
await this.storage.set('token', user_id);
 }
*/
}
