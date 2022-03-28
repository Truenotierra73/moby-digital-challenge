import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

import { HttpResponse } from '../../shared/interfaces/http-response.interface';
import { Language } from '../interfaces/language.interface';

const { giphy } = environment;

@Injectable({
  providedIn: 'root'
})
export class GifService {
  raitings: string[] = ['g', 'pg', 'pg-13', 'r'];
  languages: Language[] = [
    {
      name: 'English',
      shortName: 'en'
    },
    {
      name: 'Spanish',
      shortName: 'es'
    },
    {
      name: 'Portuguese',
      shortName: 'pt'
    },
    {
      name: 'Indonesian',
      shortName: 'id'
    },
    {
      name: 'French',
      shortName: 'fr'
    },
    {
      name: 'Arabic',
      shortName: 'ar'
    },
    {
      name: 'Turkish',
      shortName: 'tr'
    },
    {
      name: 'Thai',
      shortName: 'th'
    },
    {
      name: 'Vietnamese',
      shortName: 'vi'
    },
    {
      name: 'German',
      shortName: 'de'
    },
    {
      name: 'Vietnamese',
      shortName: 'vi'
    },
    {
      name: 'Italian',
      shortName: 'it'
    },
    {
      name: 'Japanese',
      shortName: 'ja'
    },
    {
      name: 'Vietnamese',
      shortName: 'vi'
    },
    {
      name: 'Chinese Simplified',
      shortName: 'zh-CN'
    },
    {
      name: 'Chinese Traditional',
      shortName: 'zh-TW'
    },
    {
      name: 'Russian',
      shortName: 'ru'
    },
    {
      name: 'Korean',
      shortName: 'ko'
    },
    {
      name: 'Polish',
      shortName: 'pl'
    },
    {
      name: 'Dutch',
      shortName: 'nl'
    },
    {
      name: 'Romanian',
      shortName: 'ro'
    },
    {
      name: 'Hungarian',
      shortName: 'hu'
    },
  ];
  private url: string | undefined;

  constructor(
    private http: HttpClient
  ) {

  }

  search(query: string, limit?: number, raiting?: string, lang?: string): Observable<HttpResponse> {
    this.url = `${giphy.apiURL}/search`;

    let params = new HttpParams()
      .append('api_key', giphy.apiKey)
      .append('q', query);

    if (limit) {
      params = params.append('limit', limit);
    }

    if (raiting) {
      params = params.append('raiting', raiting);
    }

    if (lang) {
      params = params.append('lang', lang);
    }

    return this.http.get<HttpResponse>(this.url, { params });
  }
}
