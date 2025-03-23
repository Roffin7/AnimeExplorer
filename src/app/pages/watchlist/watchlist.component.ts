import { Component, OnInit } from '@angular/core';
import { WatchlistService } from '../../services/watchlist.service';
import { AnimeType } from '../../model/animetype';
import { Router } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  watchlist: AnimeType[] = [];

  constructor(private watchlistService: WatchlistService, private router: Router) {}

  ngOnInit() {
    this.loadWatchlist();
  }

  loadWatchlist() {
    this.watchlistService.getWatchlist().subscribe(data => {
      this.watchlist = data;
    });
  }

  removeFromWatchlist(animeId: string) {
    this.watchlistService.removeFromWatchlist(animeId).subscribe(() => {
      this.watchlist = this.watchlist.filter(anime => anime.id !== animeId);
    });
  }

  onServiceClick(id: string) {
    const anime = this.watchlist.find(anime => anime.id === id);
    if (anime) {
      this.router.navigate(['/services', id], { state: { title: anime.title } });
    }
  }
}
