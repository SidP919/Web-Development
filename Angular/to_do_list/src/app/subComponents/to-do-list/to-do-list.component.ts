import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  localItem:any = "";
  localItemC:any = "";
  todosArr: Todo[] = [];
  todosCompleted: Todo[] = [];
  
  //toast message
  toastMsg:String = "";

  constructor() {
    this.localItem = localStorage.getItem("todosArrString");
    if(this.localItem===null){
      this.todosArr = []
    }else{
      console.log("ToDo List: " + this.localItem)
      this.todosArr = JSON.parse(this.localItem);
    }  
    this.localItemC = localStorage.getItem("todosArrStringC");
    if(this.localItemC===null){
      this.todosCompleted = []
    }else{
      console.log("Completed ToDo List: " + this.localItemC)
      this.todosCompleted = JSON.parse(this.localItemC);
    }
  }

  ngOnInit(): void {
  }

  //Delete todo from todosArr:
  deleteTodo(todo:Todo){
    this.todosArr.splice(this.todosArr.indexOf(todo),1);
    console.log(`ToDoItem: ${todo.title} has been deleted.`)
    localStorage.setItem("todosArrString",JSON.stringify(this.todosArr))

    // this.setToastMsg();
    this.showToastMsg("Selected task has been deleted successfully.");

  }

  //Add todo to todosArr:
  addToDo(todo:Todo){

    this.todosArr.push({
      title: todo.title,
      desc: todo.desc,
      active: true,
    });
    console.log(`ToDoItem: ${todo.title} has been added to TODO list.`);
    localStorage.setItem("todosArrString",JSON.stringify(this.todosArr))

    // this.setToastMsg();
    this.showToastMsg("Your new task has been created successfully.");
  }

  //Add todo to todosCompleted and delete from todosArr:
  markAsCompleted(todo:Todo){

    this.deleteTodo(todo);
    todo.active=false;
    this.todosCompleted.push(todo);
    console.log(`ToDoItem: ${todo.title} has been added to Completed TODO list.`);
    localStorage.setItem("todosArrStringC",JSON.stringify(this.todosCompleted))

    // this.setToastMsg();
    this.showToastMsg("Selected task has been marked as completed.");
  }

  //Delete todo from todosCompleted:
  deleteTodoC(todo:Todo){
    this.todosCompleted.splice(this.todosCompleted.indexOf(todo),1);
    console.log(`ToDoItem: ${todo.title} has been deleted.`)
    localStorage.setItem("todosArrStringC",JSON.stringify(this.todosCompleted))

    // this.setToastMsg();
    this.showToastMsg("Selected task has been deleted successfully.");
  }

  //shows success toast
  async showToastMsg(toastMsg:String) {
    this.toastMsg = toastMsg;
    const liveToast = document.getElementById("liveToast");
    if(liveToast){
      console.log("Show toast");
      liveToast.classList.add("fade","show");
      liveToast.classList.remove("hide");
      setTimeout(() => {
        liveToast.classList.add("hide");
        liveToast.classList.remove("show");
      }, 2500)
    }
  }
}
