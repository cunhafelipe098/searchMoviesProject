import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDto } from './utils/movie.dto';
import { MovieNotFoundException } from './utils/movie-not-found.exception.exception';

@Injectable()
export class OmdbService {
  private baseUrl = 'http://www.omdbapi.com/';

  async getMovie(title: string): Promise<MovieDto> {
    const params = {
      t: title,
      apiKey: 'e4d60a0b',
    };
    const response = await axios.get(this.baseUrl, { params });

    if (!response.data || response.data.Error) {
      throw new MovieNotFoundException();
    }

    const data: MovieDto = {
      title: response.data.Title,
      plot: response.data.Plot,
      poster: response.data.Poster,
      actors: response.data.Actors,
      rating: response.data.imdbRating,
      awards: response.data.Awards,
    };
    return data;
  }
}
