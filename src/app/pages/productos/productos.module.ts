import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';
//import 'gl-ionic-background-video';
import { ProductosPage } from './productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule
  ],
  declarations: [ProductosPage],
//  schemas: [CUSTOM_ELEMENTS_SCHEMA] // here is the schema declaration to add
})
export class ProductosPageModule {}
