import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser, userPlaceholder } from '../../../../placeholderModels/user';
import Chips = M.Chips;
import { ProjectsPageComponent } from '../../pages/projects-page/projects-page.component';

@Component({
  selector: 'pio-account-container',
  templateUrl: './account-container.component.html',
  styleUrls: ['./account-container.component.scss']
})
export class AccountContainerComponent implements OnInit {
  @ViewChild('projectsPageComponent')
  projectsPageComponent: ProjectsPageComponent;

  user: IUser;

  constructor() { }

  ngOnInit() {
    M.Chips.init(
      document.querySelectorAll('.chips'),
      {
        placeholder: 'Enter tags here'
        , onChipAdd: this.applyFilter.bind(this)
        , onChipDelete: this.applyFilter.bind(this)
      }
    );
    this.user = userPlaceholder;
  }

  applyFilter() {
    const tagArr: string[] = [];
    M.Chips.getInstance(document.querySelector('.chips')).chipsData.forEach((value) => tagArr.push(value.tag), tagArr);
    this.projectsPageComponent.resetHighlights();
    if (tagArr.length === 0) {
      this.projectsPageComponent.showAll();
    } else {
      this.projectsPageComponent.filter(tagArr);
    }
  }

}
