import { Component, OnInit, Input, OnDestroy } from '@angular/core';

import {Subscription} from 'rxjs'

import { Post } from '../post.model'
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [
  
];
  private postSubscription: Subscription ;

  constructor(public postService: PostsServiceService) {
    this.postService = postService;
   }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this.postSubscription = this.postService.getPostUpdatedListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }
  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
