import { Component } from '@angular/core';
import {Todo} from '../../Todo'
@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  todos: Todo[];
  constructor() { 
    this.todos=[
      {
        sno:1,
        title:"this title",
        desc:"Descrption",
        active:true
      },
      {
        sno:2,
        title:"this title",
        desc:"Descrption",
        active:true
      },
      {
        sno:3,
        title:"this tile",
        desc:"Descrption",
        active:true
      }
    ]
  }

}
