import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-toast-component',
  templateUrl: './show-toast-component.component.html',
  styleUrls: ['./show-toast-component.component.css']
})
export class ShowToastComponentComponent implements OnInit {

  @Input()
  currentToastMsg:String = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
