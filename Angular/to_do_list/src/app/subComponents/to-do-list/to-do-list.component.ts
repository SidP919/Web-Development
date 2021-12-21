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
        desc: "description of first todo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum repellendus cupiditate commodi?",
        active: true
      },
      {
        srNo: 2,
        title: "Second title",
        desc: "description of second todo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum repellendus cupiditate commodi?",
        active: true
      },
      {
        srNo: 3,
        title: "Third title",
        desc: "description of third todo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum repellendus cupiditate commodi?",
        active: true
      },
      {
        srNo: 4,
        title: "Fourth title",
        desc: "description of fourth todo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum repellendus cupiditate commodi?",
        active: true
      },
      {
        srNo: 5,
        title: "Fifth title",
        desc: "description of fifth todo: Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus harum repellendus cupiditate commodi?",
        active: true
      }
    ]
  }

  ngOnInit(): void {
  }

}
