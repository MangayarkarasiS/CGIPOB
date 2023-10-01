import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-ex',
  templateUrl: './mat-ex.component.html',
  styleUrls: ['./mat-ex.component.css']
})
export class MatExComponent implements OnInit {
 allNumbers:number[]=[3,2,4,6];
 
  constructor() { }

  ngOnInit(): void {
  }

}
