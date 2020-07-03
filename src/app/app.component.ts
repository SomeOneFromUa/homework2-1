import { Component } from '@angular/core';
import {IPost} from '../modules/postModule';
import {PostsService} from '../services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

posts: IPost[];

constructor(private postService: PostsService) {
  postService.getPosts().subscribe(value => this.posts = value);
}
}
