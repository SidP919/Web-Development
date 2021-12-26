import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input()
  toDoItem: Todo = new Todo;

  //Create EventEmitter todoDeleteEmitter to emit objects of type Todo:
  @Output()
  todoDeleteEmitter: EventEmitter<Todo> = new EventEmitter();

  //Create EventEmitter todoCompletedEmitter to emit objects of type Todo:
  @Output()
  todoCompletedEmitter: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Emit toDoItem to to-do-list component for deletion:
  onDelete(toDoItem: Todo){
    
    console.log("Delete is pressed.");
    //emit toDoItem of type Todo to to-do-list component:
    this.todoDeleteEmitter.emit(toDoItem);

  }

  //Emit toDoItem to to-do-list component to mark it as completed:
  onComplete(toDoItem:Todo){
    console.log("Mark as Completed is clicked.");
    this.todoCompletedEmitter.emit(toDoItem);
  }

}
