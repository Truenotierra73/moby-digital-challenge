import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { GifsListComponent } from './gifs-list.component';

const routes: Routes = [
  {
    path: '',
    component: GifsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [],
  declarations: [],
})
export class GifsListRoutingModule {
}
