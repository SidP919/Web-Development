# ToDoList

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


# Application notes:

NPM Packages required to be downloaded and setup prior to working on this application:

1> Bootstrap :
    
    a> run command: npm install bootstrap
    
    b> Now, go to angular.json file inside application's root folder( ex. to_do_list folder)

    c> In angular.json file, find object "architect" then traverse inside it and find "styles" and "scripts" array.

    d> In styles array add this string: "./node_modules/bootstrap/dist/css/bootstrap.min.css"

    e> And in scripts array add this string: "./node_modules/bootstrap/dist/js/bootstrap.js"

    f> for reference, check https://github.com/SidP919/Web-Development/tree/master/Angular/to_do_list/angular.json file 


2> jQuery :
    
    a> run command: npm install jquery

    b> Now, go to angular.json file inside application's root folder( ex. to_do_list folder)

    c> In angular.json file, find object "architect" then traverse inside it and find "scripts" array.

    d> In scripts array, add this string: "./node_modules/jquery/dist/jquery.js"

    e> for reference, check https://github.com/SidP919/Web-Development/tree/master/Angular/to_do_list/angular.json file

#


Now, that we have our dependencies ready, we can make some changes in our app component. 

Go to app.component.html file and make starting changes similar to what we done here in this commit: https://github.com/SidP919/Web-Development/commit/49823d1b65aa791e2dc8f8676a1cc56162c42f4f

So, Now we have got a Header, Footer and a Main section for our to-do-list app. 

Now, we will work on our Main section and add all the to-do-list functionality in this main section. 

For this we will create new components under subComponents folder using below command:

    ng generate component subComponents/{component-name}

or 

    ng g c subComponents/{component-name}

For ex: ng g c subcomponents/to-do-list         //This to-do-list component will contain our list of todos.

After creating to-do-list component with above command, see the files that got created and changes happened in this commit: https://github.com/SidP919/Web-Development/commit/082a7f5d44d660531c5f8d37d15fde4ea45599a2

#


Now, we will work on to-do-list component and make below changes:
    
    1> Create models/Todo.ts
    
    2> Make changes in to-do-list.component.ts
    
    3> Then make changes in to-do-list.component.html
    
    4> Now, run app at localhost:4200 to test your changes

You can get the detailed changes by checking this commit: https://github.com/SidP919/Web-Development/commit/d0a445756ad87e330bd946ead2d503a5fc28af66

After this commit, app looks like below:

![at_4th_commit](https://github.com/SidP919/Web-Development/blob/master/Angular/to_do_list/src/assets/images/app_screenshots/at_4th_commit.png)


#


Now, we will create new component to-do-item to display individual item from to-do-list, and to create it we will use below command:

    ng g c subComponents/to-do-item

Now, make below changes in to-do-item component and other components:

    1> Go to app.component.html and make the app icon and title showup at the center of the navbar

    2> make changes in to-do-list.component.ts to make value of desc in array larger in length.

    3> make changes in to-do-list.component.html to use bootstrap Grid classes and send each todo to to-do-item.component.ts

    4> make changes in to-do-item.component.ts file to recieve todo from to-do-list.component.html

    5> make changes in to-do-item.component.html to render each toDoItem

You can get the detailed changes by checking this commit: https://github.com/SidP919/Web-Development/commit/1e21899b776c5037453533c19646d03a0ea5c024


After this commit, app looks like below:

![at_5th_commit](https://github.com/SidP919/Web-Development/blob/master/Angular/to_do_list/src/assets/images/app_screenshots/at_5th_commit.png)


#


Now, we will add functionality to our delete button and make below changes:

    1> First, make our UI even better than before by making changes same as in this commit: https://github.com/SidP919/Web-Development/commit/46d9b93dd651775038a5b4860c8bf186c8cce615

    2> Now, make changes in to-do-item.component.html and make delete button image trigger event and send clicked toDoItem to onDelete() function in to-do-item.component.ts

    3> Now, make changes in to-do-item.component.ts, and make onDelete() funciton emit the clicked toDoItem to to-do-list component

    4> Now, make changes in to-do-list.component.html to receive toDoItem and send it to deleteTodo() function in to-do-list.component.ts filel.

    5> Now, make changes in to-do-list.component.ts file and make deleteTodo() function delete the passed todo from todosArr array.

You can get the detailed changes by checking this commit: https://github.com/SidP919/Web-Development/commit/426f00dee6b3f32a2915de9e62710daf60858d61


After this 6th commit, app looks almost same as before but now we are able to delete the TODOs from our list of TODOs.


#


Now, we create new component to add a TODO item to the list and make below changes:

    1> Create new component add-to-do-item component using command:

        ng g c subComponents/add-to-do-item
    
    2> Now, first make changes in add-to-do-item.component.html 
        
        so that it takes new task details from user and sends it to add-to-do-item.component.ts

    3> Now, make changes in add-to-do-item.component.ts and emit the new todo to to-do-list.component.html
    
    4> Now, make changes in to-do-list.component.html 
        
        so that add-to-do-item component shows up on it 
    
        and it also send the received todo to to-do-list.component.ts file.

    5> Now, in to-do-list.component.ts file, make changes to add the new todo to todosArr array.

You can get the detailed changes by checking this 7th major commit: https://github.com/SidP919/Web-Development/commit/d562f576e0293c79562bb767ec438f2057cb8ac4


After this commit, app looks like below:

![at_7th_commit](https://github.com/SidP919/Web-Development/blob/master/Angular/to_do_list/src/assets/images/app_screenshots/at_7th_commit.png)


#


Now, we will also add Form validation to our Add-To-Do form in add-to-do-item component:

For this, we will make changes in add-to-do-item.component.html and add-to-do-item.component.ts file,

You can get the detailed changes by checking this 8th major commit: https://github.com/SidP919/Web-Development/commit/10bdb380812e2434f691ec4c3ab5cccf7a5d9934

After this commit, app looks like below:

![at_8th_commit](https://github.com/SidP919/Web-Development/blob/master/Angular/to_do_list/src/assets/images/app_screenshots/at_8th_commit.png)


#

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#

