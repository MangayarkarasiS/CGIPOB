import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username="";
  title:string = 'CGIPOB Training';
  name = "Sindhurama";
  hgt:number=0;
  count:number=0;

  size="10px";
  pat="C:\Users\Mangai\Desktop\Edurekha\rose1.jpg";

  onClick(){
    this.count++;
    this.name="CGI Participants";
  }

  text = ''; 
  onkeyup(x:any) {   
    this.text += x.target.value + ' | '; 
  } 

}
