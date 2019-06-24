import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import * as Isotope from 'isotope-layout';
import { IsotopeOptions } from 'isotope-layout';
import * as imagesloaded from 'imagesloaded';
import * as moment from 'moment';
import { IProjects, placeholderProjects } from '../../../../placeholderModels/project';
import { Moment } from 'moment';


@Component({
  selector: 'pio-project-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit, AfterViewInit {

  iso: Isotope;

  projects: IProjects[];

  moment: Moment;

  constructor() { }

  ngOnInit() {
    this.projects = placeholderProjects;
  }

  ngAfterViewInit(): void {
    const isotopeOptions: IsotopeOptions = {
      itemSelector: '.grid-item'
      , masonry: {
        columnWidth: 300
        , gutter: 35
        , fitWidth: true
      }
      , getSortData: {
        name: '.project-name',
        date: function(itemElem) {
          // @ts-ignore
          return parseInt(itemElem.getElementsByClassName('search-date')[0].getAttribute('search-date'), 10);
        }
      }
    };
    const grid = document.getElementById('grid');
    this.iso = new Isotope(grid, isotopeOptions);
    imagesLoaded('.grid-item', () => {
      this.iso.layout();
    });
  }

  public shuffle() {
    this.iso.shuffle();
  }

  public filter(tags: string[]) {
    this.iso.arrange({filter: itemElement => {
        // console.log(tags);
        const htmlElement = itemElement.getElementsByClassName('tag-wrapper')[0];
        const resultingList = htmlElement
          .getAttribute('search-tag')
          .split(',')
          .filter(value => tags.some(value1 =>
            value1.toLowerCase().includes(value.toLowerCase())
              || value.toLowerCase().includes(value1.toLowerCase())
          ));
        resultingList.forEach(value => {
          htmlElement.getElementsByClassName(`search-tag-value-${value}`)[0].classList.add('highlight');
        });
        return resultingList.length === tags.length;
        // return !!resultingList.length;
      }
    });
  }

  public resetHighlights() {
    const allChips = document.querySelectorAll('div[class*=\'search-tag-value\']');
    for (let i = 0; i < allChips.length; i++) {
      allChips.item(i).classList.remove('highlight');
    }
  }

  public sortBy(key: string, sortAscending: boolean) {
    if (sortAscending !== null) {
      this.iso.arrange({sortBy: key, sortAscending});
    }
  }

  public showAll() {
    this.iso.arrange({filter: '*'});
  }

  private toDate(unix: number): Date {
    return new Date(unix * 1000);
  }
}
