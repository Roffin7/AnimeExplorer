import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {
  transform(animeList: any[], selectedGenre: string): any[] {
    if (!animeList || !selectedGenre || selectedGenre === 'All') {
      return animeList; // Return all if no filter is applied
    }
    return animeList.filter(anime => anime.genre.includes(selectedGenre));
  }
}
