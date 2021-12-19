import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  todosArr: Todo[];
  constructor() { 
    this.todosArr = [
      {
        srNo: 1,
        title: "First title",
        desc: "description of first todo",
        active: true
      },
      {
        srNo: 2,
        title: "Second title",
        desc: "description of second todo",
        active: true
      },
      {
        srNo: 3,
        title: "Third title",
        desc: "description of third todo",
        active: true
      },
      {
        srNo: 4,
        title: "Fourth title",
        desc: "description of fourth todo",
        active: true
      },
      {
        srNo: 5,
        title: "Fifth title",
        desc: "description of fifth todo",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
