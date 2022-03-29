import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { map, Observable } from 'rxjs';

import { GIF } from '../../interfaces/gif.interface';

import { GifService } from '../../services/gif.service';

@Injectable({ providedIn: 'root' })
export class GifDetailResolver implements Resolve<GIF> {
  constructor(private gifService: GifService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GIF> | Promise<GIF> | GIF {
    return this.gifService.getById(route.params['id']).pipe(map((res) => res.data));
  }
}
