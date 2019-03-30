import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'pio-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})
export class AnnouncementComponent implements OnInit {
  @ViewChild('signupButton')
  signupButton: HTMLElement;

  constructor() { }

  ngOnInit() {
    M.Parallax.init(document.querySelectorAll('.parallax'));
  }

  hideButtonText() {
    // @ts-ignore
    this.signupButton.nativeElement.innerHTML = '';
    document
  }

}
