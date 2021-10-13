import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdicionalesPage } from './adicionales.page';

const routes: Routes = [
  {
    path: '',
    component: AdicionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdicionalesPageRoutingModule {}
