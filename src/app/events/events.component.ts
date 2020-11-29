import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';

@Component({
  templateUrl: 'events.component.html',
  styles: [
    'h1 { font-weight: heavy; }',
    '.edit-button { background-color: blue; }'
  ]
})
export class Events {

  events = [];
  errorMessage: string;
  title = "Events";

  constructor (
    public navCtrl: NavController,
    public dataService: EventServiceProvider,
    public inputDialogService: InputDialogServiceProvider,
    ) {
      this.loadEvents();
      dataService.dataChanged$.subscribe((dataChanged: boolean) => {
        this.loadEvents();
      }
    );
  }

  loadEvents() {
    this.dataService.getEvents()
      .subscribe (
        events => this.events = events,
        error => this.errorMessage = <any>error
      );
  }

  removeEvent(event) {
    this.dataService.removeEvent(event);
  }

  editEvent(event, index) {
    this.inputDialogService.showPrompt(event, index);
  }

  addEvent() {
    this.inputDialogService.showPrompt();
  }

  removeTodo(todo) {
    this.dataService.removeTodo(todo);
  }

}
