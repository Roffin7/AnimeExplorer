import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { WatchlistComponent } from './pages/watchlist/watchlist.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { AnimeCardComponent } from './components/anime-card/anime-card.component';
import { AnimeDetailComponent } from './components/anime-detail/anime-detail.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './pages/explore/details/details.component';
import { GenreFilterPipe } from './pipes/genre-filter.pipe';
import { CommunityComponent } from './pages/community/community.component';
import { CommunityFormComponent } from './pages/community/community-form/community-form.component';
import { CommunityListComponent } from './pages/community/community-list/community-list.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ExploreComponent,
    WatchlistComponent,
    AnimeListComponent,
    AnimeCardComponent,
    AnimeDetailComponent,
    LoginComponent,
    SignupComponent,
    DetailsComponent,
    GenreFilterPipe,
    CommunityComponent,
    CommunityFormComponent,
    CommunityListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
