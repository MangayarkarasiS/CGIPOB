import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule } from './material/material.module';
import { MatExComponent } from './mat-ex/mat-ex.component';
import {MatModuleModule} from './mat-module/mat-module.module';
import { SqrtPipe } from './sqrt.pipe';
import { ExpoPipe } from './custom-pipe/expo.pipe';
import { FilterDataPipe } from './custom-pipe/filter-data.pipe';
import { TodoAnimationComponent } from './todo-animation/todo-animation.component';
import { PeopleListHttpComponent } from './people/people-list-http/people-list-http.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { StudentListHttpComponent } from './student/student-list-http/student-list-http.component';
import { PeopleViewHttpComponent } from './people/people-view-http/people-view-http.component';
import { PeopleEditHttpComponent } from './people-edit-http/people-edit-http.component';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ReactiveformComponent,
    MatExComponent,
    SqrtPipe,
    ExpoPipe,
    FilterDataPipe,
    TodoAnimationComponent,
    PeopleListHttpComponent,
    HeaderComponent,
    StudentListHttpComponent,
    PeopleViewHttpComponent,
    PeopleEditHttpComponent
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatModuleModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
