import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpResponse } from '../../../shared/interfaces/http-response.interface';
import { GIF } from '../../interfaces/gif.interface';
import { Language } from '../../interfaces/language.interface';

import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-gifs-list',
  templateUrl: './gifs-list.component.html',
  styleUrls: ['./gifs-list.component.scss']
})
export class GifsListComponent implements OnInit {
  gifs: GIF[];
  gifSearchForm: FormGroup;
  raitings: string[] = [];
  languages: Language[] = [];

  constructor(
    private gifService: GifService
  ) {
    this.raitings = this.gifService.raitings;
    this.languages = this.gifService.languages;
  }

  ngOnInit(): void {
    this.createSearchForm();
  }

  search() {
    this.gifService.search(
      this.query?.value,
      this.limit?.value,
      this.raiting?.value,
      this.language?.value
    ).subscribe({
      next: (res: HttpResponse) => {
        this.gifs = res.data;
      }
    });
  }

  clear() {
    this.gifs = [];
    this.gifSearchForm.reset();
    this.gifSearchForm.clearValidators();
  }

  async download(gifURL: any, gifTitle: any) {
    //create new a element
    let a = document.createElement('a');
    // get image as blob
    let response = await fetch(gifURL);
    let file = await response.blob();
    // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
    a.download = gifTitle;
    a.href = window.URL.createObjectURL(file);
    //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
    //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
    // a.dataset['downloadurl'] = ['application/octet-stream', a.download, a.href].join(':');
    //click on element to start download
    a.click();
  }

  get query() {
    return this.gifSearchForm.get('query');
  }

  get limit() {
    return this.gifSearchForm.get('limit');
  }

  get raiting() {
    return this.gifSearchForm.get('raiting');
  }

  get language() {
    return this.gifSearchForm.get('language');
  }

  getLimitErrorMessage() {
    if (this.limit?.hasError('min') || this.limit?.hasError('max')) {
      return 'Debe ingresar un número entre 0 y 50';
    }

    if (this.limit?.hasError('pattern')) {
      return 'Debe ingresar número enteros';
    }

    return '';
  }

  private createSearchForm() {
    this.gifSearchForm = new FormGroup({
      query: new FormControl(null),
      limit: new FormControl(null, [Validators.pattern('[0-9]*'), Validators.min(0), Validators.max(50)]),
      raiting: new FormControl(null),
      language: new FormControl(null)
    });
  }

  // private setValidator() {
  //   Validators.pattern('[0-9]*');
  // }

}
