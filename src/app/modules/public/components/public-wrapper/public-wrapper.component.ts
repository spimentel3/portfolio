import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { animate, group, keyframes, query, style, transition, trigger } from '@angular/animations';

const ANIMATE_TOP_BASE_VAL = 60;

const f = (x, b) => {
  return b * Math.pow(x, 2) + b;
};
const f2 = (x, b) => {
  return 0.01 * b * Math.pow(x, 2) + b;
};

/* Other animation
animate('0.63s ease-in-out', keyframes([
  style({
    transform: 'scale(1)'
    , offset: 0
  }),
  style({
    transform: 'scale(0.6)'
    , offset: 0.09
  }),
  style({
    transform: 'scale(1)'
    , offset: 0.095
  }),
  style({
    top: '0'
    , right: `0`
    , width: '100vw'
    , height: '100vh'
    , offset: 1.0
  })
]))
*/

/*
animate('0.9s ease-in-out', keyframes([
  style({
    transform: 'scale(1)'
    , offset: 0
  }),
  style({
    transform: 'scale(0.6)'
    , offset: 0.09
  }),
  style({
    transform: 'scale(1)'
    , offset: 0.095
  }),
  style({
    top: `${f2(0.2, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.2, 50)}px`
    , offset: 0.2
    , width: '10vw'
    , height: '10vh'
  }),
  style({
    top: `${f2(0.3, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.3, 50)}px`
    , offset: 0.3
    , width: '12vw'
    , height: '12vh'
  }),
  style({
    top: `${f2(0.4, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.4, 50)}px`
    , offset: 0.4
    , width: '18vw'
    , height: '18vh'
  }),
  style({
    top: `${f2(0.5, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.5, 50)}px`
    , offset: 0.5
    , width: '40vw'
    , height: '40vh'
  }),
  style({
    top: `${f2(0.6, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.6, 50)}px`
    , offset: 0.6
    , width: '50vw'
    , height: '50vh'
  }),
  style({
    top: `${f2(0.7, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.7, 50)}px`
    , offset: 0.7
    , width: '60vw'
    , height: '60vh'
  }),
  style({
    top: `${f2(0.8, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.8, 50)}px`
    , offset: 0.8
    , width: '75vw'
    , height: '75vh'
  }),
  style({
    top: `${f2(0.9, ANIMATE_TOP_BASE_VAL)}px`
    // , right: `${f(0.9, 50)}px`
    , offset: 0.9
    , width: '85vw'
    , height: '85vh'
  }),
  style({
    top: '0'
    , right: `0`
    , width: '100vw'
    , height: '100vh'
    , offset: 1.0
  })
]))
*/

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
            transform: 'translateY(70vh)'
          }),
        ]),
        query('#special-button', [
          style({
            position: 'fixed'
            , top: '48px'
            , right: '48px'
          }),
          animate('0.63s ease-in-out', keyframes([
            style({
              transform: 'scale(1)'
              , offset: 0
            }),
            style({
              transform: 'scale(0.6)'
              , offset: 0.09
            }),
            style({
              transform: 'scale(1)'
              , offset: 0.095
            }),
            style({
              top: '0'
              , right: `0`
              , width: '100vw'
              , height: '100vh'
              , offset: 1.0
            })
          ]))
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
