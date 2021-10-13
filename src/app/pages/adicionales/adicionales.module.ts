import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdicionalesPageRoutingModule } from './adicionales-routing.module';

import { AdicionalesPage } from './adicionales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdicionalesPageRoutingModule
  ],
  declarations: [AdicionalesPage]
})
export class AdicionalesPageModule {}
