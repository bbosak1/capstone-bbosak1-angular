import { Component } from '@angular/core';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'todo.component.html',
  styles: [
    'footer { position: fixed; left: 0; bottom: 0; width: 100%; color: white; text-align: center; }', // background-color: #85DCBA;
    '.tabs { display: inline-flex !important; }',
    '.tab-icon { padding-left: 8px; padding-right: 8px; }',
  ]
})
export class Todo {

  todos = [];
  errorMessage: string;
  show: boolean = true;

  constructor(
    public dataService: EventServiceProvider,
    public inputDialogService: InputDialogServiceProvider,
  ) {
    this.loadTodos();
    dataService.dataChanged$.subscribe((dataChanged: boolean) => {
      this.loadTodos();
    })
  }

  onChange($event) {
    console.log($event.format('MM-DD-YYYY'));
  }

  loadTodos() {
    this.dataService.getTodos()
      .subscribe (
        todos => this.todos = todos,
        error => this.errorMessage = <any>error
      );
  }

  addTodo() {
    this.inputDialogService.showTodoPrompt();
  }

  removeTodo(todo) {
    this.dataService.removeTodo(todo);
  }

  editTodo(todo) {
    console.log('hi');
    this.dataService.editTodo(todo);
  }

}
