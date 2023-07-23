import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierPage } from './pages/carrier.page';


@NgModule({
  declarations: [
    CarrierPage
  ],
  imports: [
    CommonModule,
    CarrierRoutingModule
  ]
})
export class CarrierModule { }
