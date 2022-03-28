import { Analytics } from './analitycs.interface';
import { Images } from './images.interface';
import { User } from './user.interface';

export interface GIF {
  type?: string;
  id?: string;
  url?: string;
  slug?: string;
  bitlyGIFURL?: string;
  bitlyURL?: string;
  embedURL?: string;
  username?: string;
  source?: string;
  title?: string;
  rating?: string;
  contentURL?: string;
  sourceTLD?: string;
  sourcePostURL?: string;
  isSticker?: number;
  importDatetime?: Date;
  trendingDatetime?: string;
  images?: Images;
  user?: User;
  analyticsResponsePayload?: string;
  analytics?: Analytics;
}

