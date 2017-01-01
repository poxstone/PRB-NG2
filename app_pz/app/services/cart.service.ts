import {Injectable} from '@angular/core';
import {Course} from '../common/course';

@Injectable()

export class CartService {
	private courses: any;
	private detail: any;

	constructor() {
		this.courses = {};
		this.detail = {total: 0, items: 0};
	}

	getCourses() {
		return this.courses;
	}

	getDetail() {
		return this.detail;
	}

	addToCar( courses:Course ) {

		if ( !this.courses[courses.id] ) {
			this.courses[courses.id] = {
				quantity: 1,
				name: courses.name,
				price: courses.price
			}
		} else {
			this.courses[courses.id].quantity += 1;
		}
		
		this.detail.total += courses.price;
		this.detail.item += 1;
	}

}

