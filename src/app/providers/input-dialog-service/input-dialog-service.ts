import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { EventServiceProvider } from '../../providers/event-service/event-service';

@Injectable()
export class InputDialogServiceProvider {

  constructor(
    private alertCtrl: AlertController,
    public dataService: EventServiceProvider) {
  }

  async showPrompt(event?, index?) {
    const prompt = await this.alertCtrl.create({
      header: event ? 'Edit Event' : 'Add Event',
      message: event ? "Please edit event..." : "Please enter event...",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title',
          value: event ? event.title : null
        },
        {
          name: 'date',
          placeholder: 'Date',
          value: event ? event.date : null
        },
        {
          name: 'timeSt',
          placeholder: 'Start time',
          value: event ? event.timeSt : null
        },
        {
          name: 'timeEnd',
          placeholder: 'End Time',
          value: event ? event.timeEnd : null
        },
        {
          name: 'loc',
          placeholder: 'Location',
          value: event ? event.loc : null
        },
        {
          name: 'menuItem',
          placeholder: 'Menu',
          value: event ? event.menuItem : null
        },
        {
          name: 'menuAsgn',
          placeholder: 'Menu Assignee',
          value: event ? event.menuAsgn : null
        },
        {
          name: 'decoration',
          placeholder: 'Decorations',
          value: event ? event.decoration : null
        },
        {
          name: 'decorationAsgn',
          placeholder: 'Decoration Assignee',
          value: event ? event.decorationAsgn : null
        },
        {
          name: 'guestFirstName',
          placeholder: 'Guest First Name',
          value: event ? event.guestFirstName : null
        },
        {
          name: 'guestLastName',
          placeholder: 'Guest Last Name',
          value: event ? event.guestLastName : null
        },
        {
          name: 'supplyItem',
          placeholder: 'Supplies',
          value: event ? event.supplyItem : null
        },
        {
          name: 'supplyAsgn',
          placeholder: 'Supplies Assignee',
          value: event ? event.supplyAsgn : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (index !== undefined) {
              event.title = data.title;
              event.date = data.date;
              event.timeSt = data.timeSt;
              event.timeEnd = data.timeEnd;
              event.loc = data.loc;
              event.menuItem = data.menuItem;
              event.menuAsgn = data.menuAsgn;
              event.decoration = data.decoration;
              event.decorationAsgn = data.decorationAsgn;
              event.guestFirstName = data.guestFirstName;
              event.guestLastName = data.guestLastName;
              event.supplyItem = data.supplyItem;
              event.supplyAsgn = data.supplyAsgn;
              this.dataService.editEvent(event, index);
            }
            else {
              this.dataService.addEvent(data);
            }
          }
        }
      ]
    });
    await prompt.present();
  }

  async showTodoPrompt(todo?, index?) {
    const prompt = await this.alertCtrl.create({
      header: todo ? 'Edit todo' : 'Add todo',
      message: todo ? "Please edit todo..." : "Please enter todo...",
      inputs: [
        {
          name: 'descr',
          placeholder: 'Description',
          value: todo ? todo.descr : null
        },
        {
          name: 'assignee',
          placeholder: 'Assignee',
          value: todo ? todo.assignee : null
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Save',
          handler: data => {
            if (index !== undefined) {
              todo.descr = data.descr;
              todo.assignee = data.assignee;
            }
            else {
              this.dataService.addTodo(data);
            }
          }
        }
      ]
    });
    await prompt.present();
  }

}