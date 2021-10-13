import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-adicionales',
  templateUrl: './adicionales.page.html',
  styleUrls: ['./adicionales.page.scss'],
})
export class AdicionalesPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }


}
