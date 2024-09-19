import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDo } from 'src/app/models/to-do';
import { ToDoListService } from 'src/app/services/to-do-list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  firstToDo?: ToDo;
  isLoading: boolean = false;


  constructor(
    private toDoListService: ToDoListService,
    private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.toDoListService.loadFirstToDo().subscribe(
      (response: ToDo) => {
        this.firstToDo = response;
        this.isLoading = false;
      }
    )
  }

  seeMore(){
    this.router.navigateByUrl('to-do-list');
  }

}
