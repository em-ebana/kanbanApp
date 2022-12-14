import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { Task } from './task/task-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kanban-fire';
  todo: Task[] = [
    {
      title: 'Buy milk',
      description: 'Go to the store and buy milk'
    },
    {
      title: 'Create a Kanban app',
      description: 'Using Firebase and Angular create a Kanban app!'
    }
  ];
  inProgress: Task[] = [];
  done: Task[] = [];

  editTask(list: string, task: Task): void{}

  drop(event: CdkDragDrop<Task[]>):void{
    if(event.previousContainer === event.container){
      return;
    }
    if(!event.container.data || !event.previousContainer.data){
      return;
    }
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

}
