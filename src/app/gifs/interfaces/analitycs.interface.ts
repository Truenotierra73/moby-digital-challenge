import { Onclick } from './oneclick.interface';

export interface Analytics {
  onload?: Onclick;
  onclick?: Onclick;
  onsent?: Onclick;
}
