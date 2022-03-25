import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderModule } from '../../../core/components/header/header.module';

import { GifsListRoutingModule } from './gifs-list-routing.module';

import { GifsListComponent } from './gifs-list.component';

@NgModule({
  declarations: [
    GifsListComponent
  ],
  imports: [
    CommonModule,
    GifsListRoutingModule,
    HeaderModule
  ]
})
export class GifsListModule { }
