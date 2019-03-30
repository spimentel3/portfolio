import { Component, OnInit } from '@angular/core';
import { LoginFormAnimatedComponent } from '../../components/login-form-animated/login-form-animated.component';

@Component({
  selector: 'pio-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  providers: [ LoginFormAnimatedComponent ],
})
export class SignupPageComponent implements OnInit {

  constructor(loginForm: LoginFormAnimatedComponent) { }

  ngOnInit() {
  }

}
