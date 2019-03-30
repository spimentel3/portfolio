import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pio-login-form-animated',
  templateUrl: './login-form-animated.component.html',
  styleUrls: ['./login-form-animated.component.scss']
})
export class LoginFormAnimatedComponent implements OnInit {

  @Input()
  login: boolean;

  constructor() { }

  ngOnInit() {
  }

}
