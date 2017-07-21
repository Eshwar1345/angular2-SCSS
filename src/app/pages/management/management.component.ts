import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../theme/router-transition';
 
@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss'],
  animations: [routerTransition('slideToLeft')],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class ManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
