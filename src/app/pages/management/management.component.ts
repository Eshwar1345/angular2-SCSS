import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../theme/router-transition';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
 
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  animations:
    [
      trigger('myAwesomeAnimation', [
        state('medium', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('medium => large', animate('100ms ease-in')),
      ]),
      routerTransition('slideToLeft')
    ],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class ManagementComponent implements OnInit {

  state: string = 'medium';

  animateMe() {
    this.state = (this.state === 'medium' ? 'large' : 'medium');
  }

  constructor() { }

  ngOnInit() {
  }

}
