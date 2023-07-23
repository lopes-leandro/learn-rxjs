import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrierPageComponent } from './carrier-page/carrier-page.component';

const routes: Routes = [
  {
    path: '',
    component: CarrierPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrierRoutingModule { }
