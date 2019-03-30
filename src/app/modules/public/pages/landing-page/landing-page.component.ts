import { Component, OnInit } from '@angular/core';
import { Parallax } from 'materialize-css';

@Component({
  selector: 'pio-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
  }

}
