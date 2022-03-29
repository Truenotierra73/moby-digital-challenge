import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GifDetailComponent } from './gif-detail.component';

const routes: Routes = [
  {
    path: '',
    component: GifDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifDetailRoutingModule { }
