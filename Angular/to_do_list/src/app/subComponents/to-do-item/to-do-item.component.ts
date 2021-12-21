import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  toDoItem: Todo = new Todo;
  constructor() { }

  ngOnInit(): void {
  }

}
