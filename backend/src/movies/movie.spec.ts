import { Test, TestingModule } from '@nestjs/testing';
import { OmdbService } from './omdb.service';
import axios from 'axios';
import { MovieNotFoundException } from './utils/movie-not-found.exception.exception';
describe('OmdbService', () => {
  let service: OmdbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OmdbService],
    }).compile();

    service = module.get<OmdbService>(OmdbService);
  });

  it('should return movie data', async () => {
    const title = 'The Matrix';
    const result = await service.getMovie(title);
    expect(result.title).toEqual('The Matrix');
    expect(result.actors).toEqual(
      'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss',
    );
    expect(result.rating).toEqual('8.7');
    expect(result.awards).toEqual(
      'Won 4 Oscars. 42 wins & 52 nominations total',
    );
  });

  it('should throw a MovieNotFoundException when the movie is not found', async () => {
    const title = 'Movie not found';
    jest
      .spyOn(axios, 'get')
      .mockResolvedValueOnce({ data: { Error: 'Movie not found!' } });

    await expect(service.getMovie(title)).rejects.toThrow(
      MovieNotFoundException,
    );
  });
});
