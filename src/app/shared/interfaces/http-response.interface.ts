import { Meta } from './meta.interface';
import { Pagination } from './pagination.interface';

export interface HttpResponse {
  data?: any;
  pagination?: Pagination;
  meta: Meta;
}
