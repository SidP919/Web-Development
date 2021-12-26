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
    this.validateAddTodoForm();
  }

  validateAddTodoForm(): void {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.form-validate')
    
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event: { preventDefault: () => void; stopPropagation: () => void; }) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
    });
  }

  //Emit task details to to-do-list component:
  onSubmit(){

    if(this.taskTitle!== "" && this.taskDescription!== ""){
      this.todo.title=this.taskTitle;
      this.todo.desc=this.taskDescription;
      this.addToDo.emit(this.todo);
      this.taskTitle="";
      this.taskDescription="";
    }
    else{
      console.log("Add Todo Form is not filled with valid details.");
    }
  }

}
