import { Component, OnInit } from '@angular/core';
import { AnimeType } from '../../model/animetype';
import { AnimeService } from '../../services/anime.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {
  animeList: AnimeType[] = [];
  selectedGenre: string = 'All';
  uniqueGenres: string[] = [];
  watchlist: AnimeType[] = [];

  constructor(private animeService: AnimeService, private watchlistService: WatchlistService, private router: Router) {}

  ngOnInit() {
    // Fetch all anime
    this.animeService.getAnime().subscribe(data => {
      this.animeList = data;
      this.extractUniqueGenres();
    });

    // Fetch watchlist
    this.watchlistService.getWatchlist().subscribe(data => {
      this.watchlist = data;
    });
  }

  extractUniqueGenres() {
    const allGenres = this.animeList.flatMap(anime => anime.genre);
    this.uniqueGenres = Array.from(new Set(allGenres)); // Remove duplicates
  }

  onServiceClick(id: string) {
    console.log('Service clicked:', id);
    const anime = this.animeList.find(anime => anime.id === id);
    if (anime) {
      this.router.navigate(['/services', id], { state: { title: anime.title } });
    }
  }

  isInWatchlist(animeId: string): boolean {
    return this.watchlist.some(anime => anime.id === animeId);
  }

  toggleWatchlist(anime: AnimeType) {
    if (this.isInWatchlist(anime.id)) {
      // Remove from watchlist
      this.watchlistService.removeFromWatchlist(anime.id).subscribe(() => {
        this.watchlist = this.watchlist.filter(a => a.id !== anime.id);
      });
    } else {
      // Add to watchlist
      this.watchlistService.addWatchlist(anime).subscribe(data => {
        this.watchlist.push(data);
      });
    }
  }
}
