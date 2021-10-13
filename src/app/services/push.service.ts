import { Injectable } from '@angular/core';
//import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PushService {

  mensajes: any[] = [];

  constructor(
    //private oneSignal: OneSignal,
              private route: Router,) { }


configuracionInicial(){
/*
  this.oneSignal.startInit('66e4dc47-0023-4c32-b63f-10bea62786f2', '246300314433');

  this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

  this.oneSignal.handleNotificationReceived().subscribe(( noti ) => {
   // do something when notification is received
   console.log('Notificacion recibida', noti);

  });

  this.oneSignal.handleNotificationOpened().subscribe(( noti ) => {
    // do something when a notification is opened
    console.log('Notificacion abierta', noti);
    this.route.navigateByUrl('/main/tabs/tab3');
  });

  this.oneSignal.endInit();
  */
}

}
