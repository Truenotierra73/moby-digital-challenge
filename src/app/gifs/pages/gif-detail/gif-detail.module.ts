import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { HeaderModule } from '../../../core/components/header/header.module';

import { GifDetailRoutingModule } from './gif-detail-routing.module';

import { GifDetailComponent } from './gif-detail.component';

@NgModule({
  declarations: [
    GifDetailComponent
  ],
  imports: [
    CommonModule,
    GifDetailRoutingModule,
    HeaderModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class GifDetailModule { }
