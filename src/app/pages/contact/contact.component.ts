import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../theme/router-transition';
 
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  animations: [routerTransition('slideToLeft')],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
