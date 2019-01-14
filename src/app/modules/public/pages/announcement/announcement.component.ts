import { Component, OnInit } from '@angular/core';
import { Parallax } from 'materialize-css';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
  }

}
