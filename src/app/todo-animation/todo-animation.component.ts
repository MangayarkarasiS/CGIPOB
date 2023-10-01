import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-animation',
  templateUrl: './todo-animation.component.html',
  styleUrls: ['./todo-animation.component.css'],
  animations:[
    trigger('fade',[
      transition('void=>*',[
        style({backgroundColor:'pink', opacity:0}),
        animate(2000,style({backgroundColor:'transparent', opacity:1}))
      ]),
      transition('*=>void',[
        style({backgroundColor:'transparent', opacity:1}),
        animate(2000,style({backgroundColor:'pink', opacity:0,transform:'translateX(-20px)'}))
      ])
      
    ])
  ]
})
export class TodoAnimationComponent implements OnInit {
  todoitem:string='';
 allTodo:string[]=["GoTO Market", "Fill pertrol", "Buy vegatables"]
  constructor() { }

  ngOnInit(): void {
  }
  addTodoItems(){
    this.allTodo.push(this.todoitem);
    this.todoitem='';
  }
  removeTodo(todo:string){
    this.allTodo.splice(this.allTodo.indexOf(todo),1);
  }
}
