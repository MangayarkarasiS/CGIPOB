import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, Validators, NgForm} from "@angular/forms";

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
 
   userForm:FormGroup=new FormGroup({
    'name': new FormControl('',[Validators.required,Validators.maxLength(5)]),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'gender': new FormControl('',[Validators.required]),
    'course': new FormControl('',[Validators.required]),
    });

    onSubmit(): void
    {
      console.log(this.userForm.value);
    }
  constructor() {}
  get name() {
    return this.userForm.get('name');
   } 
   get email() {
    return this.userForm.get('email');
 } 
 get gender() {
  return this.userForm.get('gender');
} 
get course() {
  return this.userForm.get('course');
} 
 courseList: course[] = [
  new course("1", "Dotnet"),
  new course('2', 'Angular'),
  new course('3', 'WebApi')
];

  ngOnInit(): void {
  }

}
export class course {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}