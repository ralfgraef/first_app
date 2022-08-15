import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-output',
  templateUrl: './todo-output.component.html',
  styleUrls: ['./todo-output.component.css']
})
export class TodoOutputComponent implements OnInit {
  @Input() item: string = '';
  constructor() { 
  }

  ngOnInit(): void {
  }

}
