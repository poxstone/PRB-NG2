import {Component} from '@angular/core';
import {Course} from '../common/course';

const COURSES : Course[] = [
    {
        id: 1,
        name: 'Angular 2',
        image: 'https://angular.io/resources/images/logos/standard/logo-nav.png',
        price: 100
    },
    {
        id: 2,
        name: 'Python',
        image: 'https://static.platzi.com/media/organizations/platzilogo.png',
        price: 120
    }
]

@Component({
    selector: 'courses',
    template: `
        <h2>{{title}}</h2>
        <div class="courses_list">
		<coursebox 
			[course]="course_info"
			*ngFor="let course_info of courses"
		></coursebox>
        </div>
    `
})

export class CoursesComponent{
    title: string = 'Cursos disponibles';
    courses: Course[] = COURSES;
}

