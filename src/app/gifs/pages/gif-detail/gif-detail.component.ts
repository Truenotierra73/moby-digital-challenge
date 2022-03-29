import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { ActivatedRoute, Data, Router } from '@angular/router';

import { GIF } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif-detail.component.html',
  styleUrls: ['./gif-detail.component.scss']
})
export class GifDetailComponent implements OnInit, AfterViewInit {
  @ViewChild('favoriteIcon') favoriteIcon: MatIcon;
  gif: GIF;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe({
      next: (value: Data) => {
        this.gif = value['gif'];
        if (value['gif'] && value['gif'].meta.status === 404) {
          this.router.navigate(['/gifs/list']);

          return;
        }
      }
    });
  }

  ngAfterViewInit() {
    // this.favoriteIcon._elementRef.nativeElement.innerHTML = 'search';
    // console.log(this.favoriteIcon);
  }

}
