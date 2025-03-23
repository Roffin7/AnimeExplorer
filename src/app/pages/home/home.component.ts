import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trendingAnime = [
    { imageUrl: 'http://localhost:8090/anime/minato.jpg', title: 'Anime 1' },
    { imageUrl: 'http://localhost:8090/anime/dragon.jpg', title: 'Anime 2' },
    { imageUrl: 'http://localhost:8090/anime/levi.jpg', title: 'Anime 3' }
  ];
  activeSlide = 0;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    setInterval(() => {
      this.activeSlide = (this.activeSlide + 1) % this.trendingAnime.length;
    }, 3000);
  }

  explore() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/explore']);
    } else {
      this.router.navigate(['/login']);
    }
  }

  joinCommunity() {
  }
}

