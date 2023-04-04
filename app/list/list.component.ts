import { Component, OnInit } from '@angular/core';
class Task {
  title: string;
  description: string;
  constructor(title: string , description: string){
    this.title = title;
    this.description = description;
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  constructor(){

  }
  title :string="";
  description:string="";

  ngOnInit() {
  }
  public taskList : Task[]=[];

  addTask(title: string , description: string){
    this.taskList.push(new Task(title, description));
  }

  removeTask(index: number){
    if(index > -1)
    this.taskList.splice(index,1);
  }


}
