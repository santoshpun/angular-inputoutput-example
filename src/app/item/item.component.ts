import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  currentItem = 'Television';
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor() { }

  ngOnInit() {
  }

  onAddItem(item: string) {
    this.items.push(item);
  }

}
