import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  localItem:any = "";
  todosArr: Todo[] = [];
  constructor() {
    this.localItem = localStorage.getItem("todosArrString");
    if(this.localItem===null){
      this.todosArr = []
    }else{
      console.log(this.localItem)
      this.todosArr = JSON.parse(this.localItem);
    }  
  }

  ngOnInit(): void {
  }

  //Delete todo from todosArr:
  deleteTodo(todo:Todo){
    this.todosArr.splice(this.todosArr.indexOf(todo),1);
    console.log(`ToDoItem: ${todo.title} has been deleted.`)
    localStorage.setItem("todosArrString",JSON.stringify(this.todosArr))
  }

  //Add todo to todosArr:
  addToDo(todo:Todo){

    this.todosArr.push({
      srNo: this.todosArr.length + 1,
      title: todo.title,
      desc: todo.desc,
      active: true,
    });
    console.log(`ToDoItem: ${todo.title} has been added to TODO list.`);
    localStorage.setItem("todosArrString",JSON.stringify(this.todosArr))

  }

}
