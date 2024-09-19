import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/models/to-do';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {

  toDoList: ToDo[] = [];
  isLoading: boolean = false;
  limit: number = 30;
  skip: number = 0;

  constructor(private toDoListService: ToDoListService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.toDoListService.loadAllToDos(this.limit, this.skip).subscribe(
      (response: any) => {
        this.toDoList = response.todos
        this.isLoading = false;
      }
    )
  }

  seeMore() {
    this.skip += 30;
    this.toDoListService.loadAllToDos(this.limit, this.skip).subscribe(
      (response: any) => {
        this.toDoList = [...this.toDoList, ...response.todos]
        this.isLoading = false;
      }
    )
  }

}
