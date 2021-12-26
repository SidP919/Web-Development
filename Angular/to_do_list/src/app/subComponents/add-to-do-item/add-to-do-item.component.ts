import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent implements OnInit {
  
  taskTitle:string = "";
  taskDescription:string = "";

  todo:Todo = new Todo();
  //EventEmitter to emit Todo to be added to todosArr array in to-do-list component:
  @Output()
  addToDo:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  //Emit task details to to-do-list component:
  onSubmit(){
    this.todo.title=this.taskTitle;
    this.todo.desc=this.taskDescription;
    this.addToDo.emit(this.todo);
  }
}
