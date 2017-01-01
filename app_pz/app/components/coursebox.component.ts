import {Component, Input} from '@angular/core';
import {Course} from '../common/course';
import {CartService} from '../services/cart.service';
import {Router} from '@angular/router';

@Component({
  selector: 'coursebox',
  template: `
     <div class="course">
        <img [src]="course.image" (click)="gotoDetails(course)" >
        <h2>{{course.name}}</h2>
        <span class="price">
          {{course.price | currency : 'USD': true :'1.2-2'}}
        </span>
        <button class="hi" (click)="add(course)" >Agregar al carrito</button>
      </div>
  `
})

export class CourseBoxComponent{
  @Input()
  course: Course;

  constructor(
	  private CartService: CartService,
	  private router: Router
  ){ }
  
  add( course: Course) {
		this.CartService.addToCar( course );
  }

  gotoDetails( course:Course ) {
	  let link  = ['/course', course.id];
	  this.router.navigate(link);
  }

} 
