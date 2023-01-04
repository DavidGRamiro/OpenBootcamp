import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.Interfaces';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();

  constructor() { }

  ngOnInit() : void {
  }

  deleteTask(){
    //Informamos al componente superios la tarea a eliminar.
    this.delete.emit(this.task);

}

}
