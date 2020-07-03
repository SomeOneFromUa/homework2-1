import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../../modules/postModule';
import {privateEntriesToIndex} from '@angular/compiler-cli/src/metadata/index_writer';
import {PostsService} from '../../../services/posts.service';
import {IComment} from '../../../modules/CommentModule';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  isOpen = false;
  @Input()
  post: IPost;
  comments: IComment[];
  constructor(private postsService: PostsService) {
  }
  onClick = () => {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
  ngOnInit(): void {
    this.postsService.getComments(this.post.id).subscribe(value => {
      this.comments = value;
    });
  }

}
