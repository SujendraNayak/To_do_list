import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  standalone: true, // ✅ Ensure it's a standalone component
  imports: [CommonModule], // ✅ Add CommonModule for *ngFor
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
