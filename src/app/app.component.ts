import { Component } from '@angular/core';
import { todos } from './todos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first_app';
  todos = todos;
  element = {};

  addTodo(data: string) {
    console.log("Hier Aufruf von addItem");
    this.todos.push({id:this.todos.length +1, description: data,isChecked:false});
  }
}
