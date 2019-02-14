import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id:number,
    public description:string,
    public targetDate : Date,
    public isDone : boolean
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  constructor() { }

  todos = [
    new Todo(1,'Learn Technology',new Date(), false),
    new Todo(2, 'Apply Jobs', new Date(), false),
    new Todo(3, 'Give Interviews', new Date(), false)
  ]
  ngOnInit() {
  }

}
