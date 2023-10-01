import { Component, OnInit,Input } from '@angular/core';
import { allPeople } from '../people';

@Component({
  selector: 'app-employee',
  templateUrl:'./employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() name:string="";
 empname:string = "Ameet";
 empage: number=21;
 countNm:string='';
 people: allPeople[] = [
  {
    "id":1,
    "name": "Douglas  Pace",
    "age": 35,
    "country":"UK"
  },
  {
    "id":2,
    "name": "Mcleod  Mueller",
    "age": 32,
    "country":"USA"
  },
  {
    "id":3,
    "name": "Day  Meyers",
    "age": 21,
    "country":"India"
  },
  {
    "id":4,
    "name": "Aguirre  Ellis",
    "age": 34,
    "country":"HK"
  },
  {
    "id":5,
    "name": "Cook  Tyson",
    "age": 32,
    "country":"Pak"
  }
];


  constructor() { }

  ngOnInit(): void {
  }
 
  AddPeople(){
  let newPeople:allPeople=
   { "id":6,"name": "Cook  Tyson",
    "age": 32,
    "country":"Pak"}
  this.people.push(newPeople);
  }
  EditPeople(){}
  UpdatePeople(){}

}
