import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  @Input() item = '';

  @Output() evtItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addItem(value: string) {
    this.evtItem.emit(value);
  }
}
