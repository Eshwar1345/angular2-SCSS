/*import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition() {
  return slideToLeft();
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
    ])
  ]);
}
*/

import {trigger, state, animate, style, transition} from '@angular/core';

export function routerTransition(a) {
  switch (a) {
    case 'slideToLeft': return slideToLeft();
    case 'slideToRight': return slideToRight();
    case 'slideWidth': return slideWidth();
    case 'slideToVisibility': return slideToVisibility();
  }
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({ 'background-color': '#fff', height: '100%', position: 'absolute', width: '100%' }) ),
    state('*', style({ 'background-color': '#fff', height: '100%', position: 'absolute', width: '100%' }) ),
    transition(':enter', [
      style({ opacity: '0', width: '50%' }),
      animate('0.5s ease-in-out', style({ opacity: '1', width: '100%' }))
    ]),
    transition(':leave', [
      style({ '-webkit-transform': 'translateX(50%)', transform: 'translateX(50%)' }),
      animate('0.5s ease-in-out', style({ opacity: 0, '-webkit-transform': 'translateX(-100%)', transform: 'translateX(-100%)', width: '50%' }))
    ])
  ]);
}
function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({ 'background-color': '#fff', height: '100%', position: 'absolute', width: '100%' }) ),
    state('*', style({ 'background-color': '#fff', height: '100%', position: 'absolute', width: '100%' }) ),
    transition(':enter', [
      style({ opacity: '0', '-webkit-transform': 'translateX(-50%)', transform: 'translateX(-50%)', width: '50%' }),
      animate('0.5s ease-in-out', style({ opacity: '1', '-webkit-transform': 'translateX(0%)', transform: 'translateX(0%)', width: '100%' }))
    ]),
    transition(':leave', [
      style({ '-webkit-transform': 'translateX(0%)', transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ opacity: 0, '-webkit-transform': 'translateX(50%)', transform: 'translateX(50%)', width: '50%' }))
    ])
  ]);
}
function slideWidth() {
  return trigger('routerTransition', [
    state('void', style({ height: '100%', position: 'absolute', width: '100%' }) ),
    state('*', style({ height: '100%', position: 'absolute', width: '100%' }) ),
    transition(':enter', [
      style({ opacity: '0' }),
      animate('0.5s ease-in-out', style({ opacity: '1' }))
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('0.5s ease-in-out', style({ opacity: '0.5', '-webkit-transform': 'translateX(-100%)', transform: 'translateX(-100%)', width: '50%' }))
    ])
  ]);
}
function slideToVisibility() {
  return trigger('routerTransition', [
    transition(':enter', [
      style({ opacity: '0' }),
      animate('0.5s ease-in-out', style({ opacity: '1' }))
    ]),
    transition(':leave', [
      style({ opacity: '1' }),
      animate('0.25s ease-in-out', style({ opacity: '0', width: '50%' }))
    ])
  ]);
}
