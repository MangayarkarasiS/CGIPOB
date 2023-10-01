import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPeople } from 'src/app/people';
import { PeopleHttpService } from 'src/app/service/people-http.service';

@Component({
  selector: 'app-student-list-http',
  templateUrl: './student-list-http.component.html',
  styleUrls: ['./student-list-http.component.css']
})
export class StudentListHttpComponent implements OnInit {
  allStud:allPeople[]=[];
  constructor(private studentHttpService :PeopleHttpService ,private router:Router ) { }//,private router:Router
  
  loadData()
  {
    this.studentHttpService.getAllpeoples().subscribe({
      next:(response)=>{this.allStud=response},
      error:(err)=>{console.log(err)}
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  viewStudent(studId:any){
    this.router.navigate([''])
 
  }
  deleteStudent(studId:any){
    this.studentHttpService.deletePeople(studId).subscribe({
     next:(response)=>{this.loadData();
    console.log(response)},
     error:(err)=>{console.log(err);}
    })

  }

}
