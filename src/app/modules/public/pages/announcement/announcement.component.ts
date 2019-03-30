import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pio-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
  }

}
