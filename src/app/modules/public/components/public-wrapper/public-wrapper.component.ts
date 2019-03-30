import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, animation, group, keyframes, query, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'pio-public-wrapper',
  templateUrl: './public-wrapper.component.html',
  styleUrls: ['./public-wrapper.component.scss'],
  animations: [
    trigger('PublicRouterTransitions', [
      transition('announcement => signup', [
        group([
          query('#signup-page-wrapper', [
            style({
              transform: 'translateX(-250vh)'
            })
          ]),
          query('#announcement-page-wrapper', [
            style({
              transform: 'translateY(-100vh)'
            })
          ])
        ]),
        query('#login-wrapper', [
          style({
            transform: 'translateY(100vh)'
          }),
        ]),
        query('#special-button', [
          style({
            position: 'fixed'
            , top: '48px'
            , right: '48px'
          }),
          animation([
            animate('1s', keyframes([
              style({
                transform: 'scale(1)'
                , offset: 0.0
              }),
              style({
                transform: 'scale(0.8)'
                , offset: 1.0
              }),
            ])),
            animate('3s ease-in-out', keyframes([
              style({
                transform: 'scale(1)'
                , offset: 0.0
              }),
              style({
                top: '0'
                , right: `0`
                , width: '100vw'
                , height: '100vh'
                , offset: 1.0
              })
            ])),
          ]),
        ]),
        group([
          query('#signup-page-wrapper', [
            style({
              transform: 'translateX(0)'
            })
          ]),
          query('#announcement-page-wrapper', [
            style({
              transform: 'translateX(-250vh)'
            })
          ])
        ]),

        query('#special-button', [
          style({opacity: '1.0'}),
          animate('1s', style({opacity: '0.0'}))
        ]),
        query('#login-wrapper', [
          animate('0.8s ease-in-out', style({
            transform: 'translateY(0vh)'
          }))
        ]),
      ])
    ])
  ]
})
export class PublicWrapperComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getRouteAnimation(outlet: RouterOutlet) {
    return outlet.activatedRouteData.state;
  }

}
