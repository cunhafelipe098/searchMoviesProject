import { Module } from '@nestjs/common';
import { OmdbService } from './movies/omdb.service';
import { MoviesController } from './movies/movies.controller';
@Module({
  controllers: [MoviesController],
  providers: [OmdbService],
})
export class AppModule {}
