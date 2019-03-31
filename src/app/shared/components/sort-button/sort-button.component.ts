import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pio-sort-button',
  templateUrl: './sort-button.component.html',
  styleUrls: ['./sort-button.component.scss']
})
export class SortButtonComponent implements OnInit {

  @Input()
  text: string;

  @Input()
  classes: string;

  @Input()
  flip = false;

  @Output()
  clicked: EventEmitter<boolean> = new EventEmitter();

  // State to sort by
  sortAscending = null;

  constructor() { }

  ngOnInit() {
  }

  clearSort() {
    this.sortAscending = null;
  }

  clickedButton() {
    this.toggleAscending();
    this.clicked.emit(this.sortAscending);
  }

  toggleAscending() {
    switch (this.sortAscending) {
      case null:
        this.sortAscending = true;
        break;
      case true:
        this.sortAscending = false;
        break;
      case false:
        this.sortAscending = null;
        break;
    }
  }

}
