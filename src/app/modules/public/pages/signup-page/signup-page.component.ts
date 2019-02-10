import { Component, OnInit } from '@angular/core';
import { LoginFormAnimatedComponent } from '../../components/login-form-animated/login-form-animated.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

function onLoadFn(fromState: string, toState: string, element?: any, params?: { [key: string]: any; }): boolean {
  return toState === 'go!';
}

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
  providers: [ LoginFormAnimatedComponent ],
  animations: [
    trigger('flyInFormTrigger', [
      state('offScreen', style({
        transform: 'translateY(100vh)',
        opacity: 0,
        display: 'none'
      })),
      state('onScreen', style({
        transform: 'translateY(100%);',
        opacity: 1
      })),
      transition(onLoadFn, [
        animate('3s')
      ])
    ])
  ]
})
export class SignupPageComponent implements OnInit {

  public flyInForm: string;

  constructor(loginForm: LoginFormAnimatedComponent) { }

  ngOnInit() {
    this.flyInForm = 'go!';
  }

}
