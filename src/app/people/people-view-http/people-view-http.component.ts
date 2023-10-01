import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { allPeople } from 'src/app/people';
import { PeopleHttpService } from 'src/app/service/people-http.service';

@Component({
  selector: 'app-people-view-http',
  templateUrl: './people-view-http.component.html',
  styleUrls: ['./people-view-http.component.css']
})
export class PeopleViewHttpComponent implements OnInit {
 fetchedPeople:allPeople={
  id:0, name:'', age:0,country:''}
 pId:number=0;
  constructor(private activatedRoute:ActivatedRoute,
    private peopleHttpService:PeopleHttpService,
    private router:Router) { } 

  ngOnInit(): void {
     let pId=this.activatedRoute.snapshot.paramMap.get('pid');
    if(pId!=null){
       this.peopleHttpService.getApeople(pId).subscribe({
          next:(response)=> {this.fetchedPeople=response},
          error:(err)=>{console.log(err)}
       })
    } 
  }
 back()
 {
  this.router.navigate(['PeopleList']);
 }
}
