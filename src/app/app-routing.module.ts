import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListHttpComponent } from './people/people-list-http/people-list-http.component';
import { EmployeeComponent } from './employee/employee.component';
import { PeopleViewHttpComponent } from './people/people-view-http/people-view-http.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { PeopleEditHttpComponent } from './people-edit-http/people-edit-http.component';

const routes: Routes = [
  {
    path:'PeopleList', component:PeopleListHttpComponent
  },
  {
    path:'EmployeeList', component:EmployeeComponent
  },
  {
    path:'people-edit-http/:pid', component:PeopleEditHttpComponent
  },
  {
    path:'people-view-http/:pid', component:PeopleViewHttpComponent
  },
  {
    path:'student-list-http', component:StudentListHttpComponent
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
