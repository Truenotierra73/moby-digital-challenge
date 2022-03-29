import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

import { catchError, map, Observable, of } from 'rxjs';
import { HttpResponse } from '../../../shared/interfaces/http-response.interface';

import { GIF } from '../../interfaces/gif.interface';

import { GifService } from '../../services/gif.service';

@Injectable({ providedIn: 'root' })
export class GifDetailResolver implements Resolve<GIF | any> {
  constructor(
    private router: Router,
    private gifService: GifService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<GIF> | Observable<any> {
    console.log((route.params['id']));

    return this.gifService.getById(route.params['id']).pipe(
      map((res) => {
        return res.data;
      }),
      catchError((err: HttpErrorResponse) => {
        return of(err.error);
      })
    );
  }
}
