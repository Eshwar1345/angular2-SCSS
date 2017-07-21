import { Component, OnInit } from '@angular/core';
import { SlideService } from '../../services/slide.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  pages= ['home', 'about', 'manage', 'contact'];
  currPage = 0;
  move = 'slideToRight';

  constructor(private slide : SlideService) { }

  ngOnInit() {
  }

  handleIndex(el){
    this.move = (this.pages.indexOf(el) > this.currPage)? 'slideToRight' : 'slideToLeft';
    console.log(this.move);
    this.currPage = this.pages.indexOf(el); 
    this.slide.move = this.move;
  }

}
