import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { OmdbService } from './omdb.service';
import { MovieNotFoundException } from './utils/movie-not-found.exception.exception';

@Controller('movies')
export class MoviesController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get(':title')
  async getMovie(@Param('title') title: string) {
    try {
      return this.omdbService.getMovie(title);
    } catch (e) {
      if (e instanceof MovieNotFoundException) {
        throw new NotFoundException('Movie not found');
      } else {
        throw e;
      }
    }
  }
}
