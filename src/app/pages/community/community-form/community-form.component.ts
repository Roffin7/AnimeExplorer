import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-community-form',
  templateUrl: './community-form.component.html',
  styleUrls: ['./community-form.component.css']
})
export class CommunityFormComponent {
  user: string = '';
  message: string = '';
  imageUrl: string = '';

  avatars: string[] = [
    'avatar1.png',
    'avatar2.png',
    'avatar3.png',
    'avatar4.png',
    'avatar5.png',
    'avatar6.png',
    'avatar7.png',
    'avatar8.png',
    'avatar9.png',
    'avatar10.png'
  ];

  @Output() postCreated = new EventEmitter<{ user: string; message: string; imageUrl: string }>();

  constructor() {
    this.assignRandomAvatar();
  }

  assignRandomAvatar() {
    const randomIndex = Math.floor(Math.random() * this.avatars.length);
    this.imageUrl = this.avatars[randomIndex];
  }

  submitPost() {
    if (this.user.trim() && this.message.trim()) {
      const newPost = { user: this.user, message: this.message, imageUrl: this.imageUrl };
      this.postCreated.emit(newPost); // Emit event to parent
      this.message = ''; // Clear input field
    }
  }
}
