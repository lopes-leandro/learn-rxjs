import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/carriers',
    pathMatch: 'full'
  },
  {
    path: 'carriers',
    loadChildren: () => import('./carrier/carrier.module').then((m) => m.CarrierModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
