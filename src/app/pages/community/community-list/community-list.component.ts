import { Component, Input } from '@angular/core';
import { Message } from '../../../model/messages';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent {
  @Input() posts: Message[] = []; 
}
