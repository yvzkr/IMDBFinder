import {ApiResponse} from './api-response';
import {MediaItem} from './media-item';

export interface MediaItemExtended extends MediaItem, ApiResponse {
  Plot: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  totalSeasons: string; // only for series
  Awards: string;
  BoxOffice: string;
  Language: string;
  imdbRating: string;
}
