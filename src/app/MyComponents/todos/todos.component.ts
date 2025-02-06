import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  standalone: true, // ✅ Ensure it's a standalone component
  imports: [CommonModule, TodoItemComponent], // ✅ Add CommonModule for *ngFor
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  todos: Todo[];

  constructor() {
    this.todos = [
      { sno: 1, title: "this title", desc: "Description", active: true },
      { sno: 2, title: "this title", desc: "Description", active: true },
      { sno: 3, title: "this title", desc: "Description", active: true }
    ];
  }
}
