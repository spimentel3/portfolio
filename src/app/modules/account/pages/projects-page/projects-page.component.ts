import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxMasonryComponent, NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-project-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  @ViewChild('masonry') masonry: NgxMasonryComponent;

  masonryOptions: NgxMasonryOptions = {
    fitWidth: true,
    gutter: 30,
    columnWidth: 350,
    originTop: true,
    horizontalOrder: true
  };

  getRandomKittenUrl = () => `https://placekitten.com/${Math.round(Math.random() * 100 + 300)}/${Math.round(Math.random() * 100 + 300)}`

  placeholderProjects = [
    {projectName: 'Portfolio 1', img: this.getRandomKittenUrl(), color: '#ff8f00', desc: 'Tempor fusce natoque platea ultrices, vivamus orci ipsum lacinia at orci ipsum lacinia orci ipsum lacinia'},
    {projectName: 'Buster Sword 2', img: this.getRandomKittenUrl(), color: '#e91e63', desc: 'Vel condimentum amet natoque semper vestibulum sed quis porta fusce condimentum amet natoque '},
    {projectName: 'Other Project 3', img: this.getRandomKittenUrl(), color: '#4fc3f7', desc: 'Condimentum montes semper dignissim arcu eleifend duis vestibulum et mauris semper dignissim arcu eleifend duis vestibulum'},
    {projectName: 'Portfolio 4', img: this.getRandomKittenUrl(), color: '#ff8f00', desc: 'Tempor fusce natoque platea ultrices, vivamus orci Tempor fusce natoque platea ultrices ipsum lacinia at.'},
    {projectName: 'Buster Sword 5', img: this.getRandomKittenUrl(), color: '#e91e63', desc: 'Vel condimentum amet quis porta natoque semper vestibulum sed quis porta fusce.'},
    {projectName: 'Other Project 6', img: this.getRandomKittenUrl(), color: '#4fc3f7', desc: 'Condimentum semper dignissim arcu eleifend duis montes et mauris semper dignissim arcu eleifend duis vestibulum!'},
    {projectName: 'Portfolio 7', img: this.getRandomKittenUrl(), color: '#ff8f00', desc: 'Tempor fusce natoque orci ipsum lacinia platea ultrices, vivamus orci ipsum lacinia at.'},
    {projectName: 'Buster Sword 8', img: this.getRandomKittenUrl(), color: '#e91e63', desc: 'Vel condimentum amet natoque semper vestibulum sed quis porta fusce.'},
    {projectName: 'Other Project 9', img: this.getRandomKittenUrl(), color: '#4fc3f7', desc: 'Condimentum montes et mauris semper dignissim montes et mauris semper arcu eleifend duis vestibulum!'},
  ];

  constructor() { }

  ngOnInit() {
  }
}
