import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventServiceProvider } from '../providers/event-service/event-service';
import { InputDialogServiceProvider } from '../providers/input-dialog-service/input-dialog-service';

@Component({
  templateUrl: 'events.component.html',
  styles: [
    'h1 { font-weight: heavy; }',
    '.edit-button { background-color: blue; }',
    'footer { position: fixed; left: 0; bottom: 0; width: 100%; color: white; text-align: center; }', // background-color: #85DCBA;
    '.tabs { display: inline-flex !important; }',
    '.tab-icon { padding-left: 8px; padding-right: 8px; }',
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
    console.log('hi');
    this.dataService.removeEvent(event);
  }

  editEvent(event, index) {
    console.log('horse');
    this.inputDialogService.showPrompt(event, index);
  }

  addEvent() {
    this.inputDialogService.showPrompt();
  }

  removeTodo(todo) {
    this.dataService.removeTodo(todo);
  }

}
