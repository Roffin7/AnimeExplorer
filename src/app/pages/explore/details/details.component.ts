import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimeService } from '../../../services/anime.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  id: any = '';
  title: string = '';
  desctitle: string = '';
  description: string[] = [];
  imageUrl: string = '';
  genre: string[] = [];
  episodes: string = '';
  rating: number = 0;
  releaseYear: number = 0;
  studio: string = '';
  mainCharacter: string = '';
  status: string = '';
  theme: string = '';
  antagonist: string = '';
  openingSong: string = '';
  mangaAuthor: string = '';
  popularityRank: number = 0;
  awards: string[] = [];
  relatedAnime: string[] = [];
  constructor(private route: ActivatedRoute,private router:Router
    ,private api:AnimeService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation)
    if (navigation?.extras.state) {
      this.title = navigation.extras.state['title'];
      console.log('Title:', this.title);
    }
  }

  ngOnInit() {

   this.api.getDetails(this.id).subscribe({
     next	: (result:any) => {
      console.log(result)
        this.desctitle = result[0].title;
        this.description = result[0].description;
        this.imageUrl = result[0].imageUrl;
        this.genre = result[0].genre;
        this.episodes = result[0].episodes;
        this.rating = result[0].rating;
        this.releaseYear = result[0].releaseYear;
        this.studio = result[0].studio;
        this.mainCharacter = result[0].mainCharacter;
        this.status = result[0].status;
        this.theme = result[0].theme;
        this.antagonist = result[0].antagonist;
        this.openingSong = result[0].openingSong;
        this.mangaAuthor = result[0].mangaAuthor;
        this.popularityRank = result[0].popularityRank;
        this.awards = result[0].awards;
        this.relatedAnime = result[0].relatedAnime;
     },
     error: (error:any) => console.log(error)
   });
     

  }

}
