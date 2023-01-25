import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-add-to-do-item',
  templateUrl: './add-to-do-item.component.html',
  styleUrls: ['./add-to-do-item.component.css']
})
export class AddToDoItemComponent {
  
  taskTitle:string = "";
  taskDescription:string = "";

  todo:Todo = new Todo();
  //EventEmitter to emit Todo to be added to todosArr array in to-do-list component:
  @Output()
  addToDo:EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  //Emit task details to to-do-list component:
  onSubmit(){
    const invalidTitle = document.getElementById("invalid-title");
    const invalidDescription = document.getElementById("invalid-description");
    if(invalidTitle){
      invalidTitle.classList.add("invisible");
    }
    if(invalidDescription){
      invalidDescription.classList.add("invisible");
    }
    if(this.taskTitle!== "" && this.taskDescription!== ""){
      this.todo.title=this.taskTitle;
      this.todo.desc=this.taskDescription;
      this.addToDo.emit(this.todo);
      this.taskTitle="";
      this.taskDescription="";
    }
    else{
      console.log("Add Todo Form is not filled with valid details.");
      if(!this.taskTitle){
        
        if(invalidTitle){
          invalidTitle.classList.remove("invisible");
        }
      }
      if(!this.taskDescription){
        if(invalidDescription){
          invalidDescription.classList.remove("invisible");
        }
      }
    }
  }

}
