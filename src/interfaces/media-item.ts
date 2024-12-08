import {MediaType} from '../enums/media-type';

export interface MediaItem {
  Title: string;
  Year: string;
  imdbID: string;
  Type: MediaType;
  Poster: string;
}
