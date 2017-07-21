import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../theme/router-transition';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
 
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations:
    [
      trigger('myAwesomeAnimation', [
        state('medium', style({
            transform: 'scale(1)',
        })),
        state('small', style({
            transform: 'scale(.8)',
        })),
        transition('medium => small', animate('100ms ease-in')),
      ]),
      routerTransition('slideToLeft')
    ],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {

  state: string = 'medium';

  animateMe() {
    this.state = (this.state === 'medium' ? 'small' : 'medium');
  }

  constructor() { }

  ngOnInit() {
  }

}
