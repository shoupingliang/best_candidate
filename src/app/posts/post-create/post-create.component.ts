import { Component, OnInit, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  enteredContent = "";
  enteredTitle  = "";

  onAddPost(form: NgForm){
    if(form.invalid){
      return;
    }

  this.postService.addPost(form.value.title, form.value.content);
  form.resetForm();
  }
  constructor(public postService: PostsServiceService) { }

  
  ngOnInit() {
  }

}
