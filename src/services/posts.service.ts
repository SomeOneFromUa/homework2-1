import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../modules/postModule';
import {Observable} from 'rxjs';
import {IComment} from '../modules/CommentModule';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private httpPost: HttpClient, private httpComments: HttpClient) { }
  getPosts(): Observable<IPost[]> {
    return this.httpPost.get<IPost[]>('https://jsonplaceholder.typicode.com/posts');
  }
  getComments(postId): Observable<IComment[]> {
    return this.httpComments.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
  }
}
