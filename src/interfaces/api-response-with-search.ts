import {ApiResponse} from './api-response';

export interface ApiResponseWithSearch<T> extends ApiResponse {
  Search?: T;
  totalResults?: number;
}
