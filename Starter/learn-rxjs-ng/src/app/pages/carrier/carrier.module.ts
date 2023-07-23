import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrierRoutingModule } from './carrier-routing.module';
import { CarrierPageComponent } from './carrier-page/carrier-page.component';


@NgModule({
  declarations: [
    CarrierPageComponent
  ],
  imports: [
    CommonModule,
    CarrierRoutingModule
  ]
})
export class CarrierModule { }
