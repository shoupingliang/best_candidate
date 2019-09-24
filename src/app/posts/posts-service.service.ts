import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {
  private posts: Post[] = [
  {title: 'Shou-Ping Liang', content: 'Google Cloud Platform certified cloud engineer, an IT consultant with love of cloud services'},
  {title: 'Donald Trumph', content: 'American President'},
  {title: 'Charlie Brown', content: 'The main role of Peanuts'},
  {title: 'Snow White', content: 'The most famous princess on the world'}
  ];
  private postUpdated = new Subject<Post[]>();

  getPosts(){
    return [...this.posts];
  }

  getPostUpdatedListener(){
    return this.postUpdated.asObservable();
  }
  
  addPost(title: string, content: string){
    const post: Post = {title: title, content: content};
    this.posts.push(post);
    this.postUpdated.next([...this.posts])
  }

  constructor() { }
}
