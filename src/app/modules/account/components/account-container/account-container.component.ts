import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss']
})
export class AccountContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Chips.init(document.querySelectorAll('.chips'), {placeholder: 'Enter tags here'});
  }

}
