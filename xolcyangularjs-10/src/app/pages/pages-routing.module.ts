import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { LayoutTwo3Component } from './layout-two3/layout-two3.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutTwo3Component
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
