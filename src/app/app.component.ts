import { Component, OnInit } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts = [];

  constructor() { }

  ngOnInit() {
  }

  onSavePost(event: EventEmitter) {
    this.posts.push(event);
  }
}
