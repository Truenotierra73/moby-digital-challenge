import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GifDetailResolver } from './pages/gif-detail/gif-detail.resolver';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list',
        loadChildren: () => import('./pages/gifs-list/gifs-list.module').then(m => m.GifsListModule)
      },
      {
        path: ':id/detail',
        loadChildren: () => import('./pages/gif-detail/gif-detail.module').then(m => m.GifDetailModule),
        resolve: {
          gif: GifDetailResolver
        }
      },
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GifsRoutingModule { }
