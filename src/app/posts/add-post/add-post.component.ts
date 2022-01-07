import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  post: Post = {} as Post;

  @Output()
  evtPost = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  savePost() {
    const post = {
      title: this.post.title,
      content: this.post.content
    }
    this.evtPost.emit(post);
  }

}
