import { Component } from '@angular/core';
import { AnimeService } from '../../services/anime.service';
import { Message } from '../../model/messages';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'] 
})
export class CommunityComponent {
  posts: Message[] = [];

  constructor(private communityService: AnimeService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.communityService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  onNewPost(post: { user: string; message: string }) {
    this.communityService.addPosts(post).subscribe((newPost) => {
      this.posts.push(newPost); // Update the UI
    });
  }
}
