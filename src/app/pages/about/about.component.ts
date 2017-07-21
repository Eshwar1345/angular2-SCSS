import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../theme/router-transition';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routerTransition('slideToLeft')],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {
  move = 'slideToRight';

  constructor(private slide: SlideService) {
    this.move = slide.move;
  	console.log(slide.move);
  }

  ngOnInit() {
  }

}
/*
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouteParams } from '@angular/router';
import { routerTransition } from '../../theme/router-transition';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [routerTransition(slide)],
  host: {'[@routerTransition]': ''},
  encapsulation: ViewEncapsulation.None
})

export class AboutComponent implements OnInit {
 slide = '';

  constructor(params: RouteParams) { 
  	this.slide = params.get(slide);
  }

  ngOnInit() {
  }

}
*/