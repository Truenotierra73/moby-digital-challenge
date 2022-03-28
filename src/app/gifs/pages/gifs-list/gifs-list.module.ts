import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FileSaverModule } from 'ngx-filesaver';

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
    ReactiveFormsModule,
    HeaderModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatMenuModule,
    MatTooltipModule,
    FileSaverModule
  ]
})
export class GifsListModule { }
