import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnimeType } from '../model/animetype';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  constructor(private http: HttpClient) {}

  // Get all anime in watchlist
  getWatchlist(): Observable<any> {
    return this.http.get('http://localhost:4500/watchlist');
  }

  // Add anime to watchlist
  addWatchlist(data: any): Observable<any> {
    return this.http.post('http://localhost:4500/watchlist', data);
  }

  // Remove anime from watchlist
  removeFromWatchlist(animeId: string): Observable<any> {
    return this.http.delete(`http://localhost:4500/watchlist/${animeId}`);
  }
}
