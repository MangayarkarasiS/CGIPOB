import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { allPeople } from 'src/app/people';
import { PeopleHttpService } from 'src/app/service/people-http.service';


@Component({
  selector: 'app-people-list-http',
  templateUrl: './people-list-http.component.html',
  styleUrls: ['./people-list-http.component.css']
})
export class PeopleListHttpComponent implements OnInit {
  people: allPeople[] = [];
  constructor(private peopleHttpService:PeopleHttpService,
    private router:Router) { }
 
  loadData()
  {
    this.peopleHttpService.getAllpeoples().subscribe({
      next:(response)=>{
        this.people=response;
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  ngOnInit(): void {
    this.loadData();
  }
  editPeople(pId:number){
    this.router.navigate(['people-edit-http',pId])
  }
  ViewPeople(pId:number){
      this.router.navigate(['people-view-http',pId])
  }
  deletePeople(pId:number){
    this.peopleHttpService.deletePeople(pId).subscribe({
      next:(response)=>{
        this.loadData();
        
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
