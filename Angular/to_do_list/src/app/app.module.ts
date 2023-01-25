import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './subComponents/to-do-list/to-do-list.component';
import { ToDoItemComponent } from './subComponents/to-do-item/to-do-item.component';
import { AddToDoItemComponent } from './subComponents/add-to-do-item/add-to-do-item.component';
import { FormsModule } from '@angular/forms';
import { ShowToastComponentComponent } from './subComponents/show-toast-component/show-toast-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    ToDoItemComponent,
    AddToDoItemComponent,
    ShowToastComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
