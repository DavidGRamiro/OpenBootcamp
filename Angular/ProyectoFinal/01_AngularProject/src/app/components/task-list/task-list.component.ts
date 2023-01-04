import { Component, OnInit } from '@angular/core';
import { ITask, Levels } from 'src/app/models/interfaces/Task.Interfaces';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  //TODO Reformular como una lista de tareas

  tarea1 : ITask = {
    title: "Tarea 1",
    description: "Descripción de la tarea 1",
    completed: false,
    level: Levels.Info
  }

  tarea2 : ITask = {
    title: "Tarea 2",
    description: "Descripción de la tarea 2",
    completed: true,
    level: Levels.Urgent
  }


  constructor() { }

  ngOnInit() : void {
  }
  
  //TODO Sustituir por un Splice para eliminar la lista de tareas 
  deleteTask(task : ITask){
    alert(`Eliminando la tarea ${task.title}`);
  }

}
