import { Injectable } from '@angular/core';  

@Injectable()
export class SlideService {
	move: string = 'slideToRight';  
    getSlideValue(): string { 
       return this.move; 
    } 
} 