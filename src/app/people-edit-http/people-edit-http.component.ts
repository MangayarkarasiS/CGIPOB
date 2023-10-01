import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PeopleHttpService } from '../service/people-http.service';
import { allPeople } from '../people';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-people-edit-http',
  templateUrl: './people-edit-http.component.html',
  styleUrls: ['./people-edit-http.component.css']
})
export class PeopleEditHttpComponent implements OnInit {
  isDisabled=true;
  //invalidText:boolean=false;
  fetchedStudent :allPeople={
    id:0,
    name:'',
    age:0,
    country:''
    }
  myReactiveForm:FormGroup=new FormGroup({
    rsId:new FormControl(),
    rsName:new FormControl('',[Validators.required,this.onlyText]),
    rsAge:new FormControl('',Validators.required),
    rsCountry:new FormControl('',Validators.required) 
  });
  constructor(private activatedRoute:ActivatedRoute,
              private router:Router,
              private peopleHttpService:PeopleHttpService) { }

  ngOnInit(): void {
    let pId=this.activatedRoute.snapshot.paramMap.get('pid');
    if(pId!=null)
     this.peopleHttpService.getApeople(pId).subscribe({
     next:(response)=>{this.fetchedStudent=response;this.myReactiveForm.setValue({
      rsId:this.fetchedStudent.id,
      rsName:this.fetchedStudent.name,
      rsAge:this.fetchedStudent.age,
      rsCountry:this.fetchedStudent.country
     })},
     error:(err)=>console.log(err)
})
  }
  editPeople(){
   console.log(this.myReactiveForm)
   let updatPeople:allPeople={
    id:this.myReactiveForm.value.rsId,
    name:this.myReactiveForm.value.rsName,
    age:this.myReactiveForm.value.rsAge,
    country:this.myReactiveForm.value.rsCountry
   }
   this.peopleHttpService.updatePeople(updatPeople).subscribe({
    next:(response)=>{
      console.log(response);
      this.router.navigate(['PeopleList'])
    },
    error:(err)=>{console.log(err)}
   })
  }
  
  addAnotherValidator(){
    this.myReactiveForm.get('rsName')?.addValidators(Validators.minLength(2));
    this.myReactiveForm.get('rsName')?.updateValueAndValidity();
  }
  onlyText(control:FormControl){
    if(control.value!=null && !/^[A-Za-z\s]*$/.test(control.value))
    {
      return({invalidText:true})
    }
  
    return  null;
  }
}
