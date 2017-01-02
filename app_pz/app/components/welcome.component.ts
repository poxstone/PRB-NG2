import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
	template: `
	<h2>Bienvenido a nuestra tienda</h2>
	`
})

export class WelcomeComponent implements OnInit {
	constructor(
		private auth : AuthService
	) { }

	ngOnInit() {
		this.auth.check()
	}

}

