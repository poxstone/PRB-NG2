import {Component} from '@angular/core';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'my-app',
  template: 
  `
    <header>
      Cursos Platzi
    </header>
	<nav>
  	  <a routerLink="">inicio</a>
  	  <a routerLink="courses">Cursos</a>
  </nav>
    <section>
	  <router-outlet></router-outlet>
    </section>
  `,
  providers: [ CartService ]
})

export class AppComponent{}
