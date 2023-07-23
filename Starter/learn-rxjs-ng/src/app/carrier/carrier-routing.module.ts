import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierPage } from './pages/carrier.page';

const routes: Routes = [
  {
    path: '',
    component: CarrierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrierRoutingModule { }
