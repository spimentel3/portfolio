import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as Isotope from 'isotope-layout';
import { IsotopeOptions } from 'isotope-layout';
import * as imagesloaded from 'imagesloaded';
import { IProjects, placeholderProjects } from '../../../../placeholderModels/project';
import { IUser, userPlaceholder } from '../../../../placeholderModels/user';

@Component({
  selector: 'app-project-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {

  iso: Isotope;

  projects: IProjects[];

  constructor() { }

  ngOnInit() {
    this.projects = placeholderProjects;
  }

  ngAfterViewInit(): void {
    const isotopeOptions: IsotopeOptions = {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-sizer'
      }
    };
    const grid = document.getElementById('grid');
    this.iso = new Isotope(grid, isotopeOptions);
    imagesLoaded('.grid-item', () => {
      this.iso.layout();
    });
  }

  shuffle() {
    this.iso.shuffle();
  }
}
