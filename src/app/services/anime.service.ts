import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http:HttpClient) { }

  getAnime():Observable<any>{
    return this.http.get('http://localhost:4500/anime');
  }

  getDetails(id:string):Observable<any>{
    return this.http.get(`http://localhost:4500/details?id=${id}`);
  }

}
