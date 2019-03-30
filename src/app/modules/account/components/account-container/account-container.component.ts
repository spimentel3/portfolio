import { Component, OnInit } from '@angular/core';
import { IUser, userPlaceholder } from '../../../../placeholderModels/user';

@Component({
  selector: 'app-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss']
})
export class AccountContainerComponent implements OnInit {

  user: IUser;

  constructor() { }

  ngOnInit() {
    M.Chips.init(document.querySelectorAll('.chips'), {placeholder: 'Enter tags here'});
    this.user = userPlaceholder;
  }

}
