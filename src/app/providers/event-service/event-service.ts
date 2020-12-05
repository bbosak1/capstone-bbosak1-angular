import { Injectable } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class EventServiceProvider {

  todos: any = [];
  events: any = [];
  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  svcURL = "http://ec2-3-133-79-60.us-east-2.compute.amazonaws.com/";

  constructor(
    public http: HttpClient
  ) {
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

  getEvents(): Observable<any> {
    return this.http.get(this.svcURL + 'api/events').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  removeEvent(event) {
    this.http.delete(this.svcURL + "api/events/" + event._id)
      .subscribe(res => {
        this.events = res;
        this.dataChangeSubject.next(true);
      });
  }

  addEvent(event) {
    this.http.post(this.svcURL + "api/events", event)
      .subscribe(res => {
        this.events = res;
        this.dataChangeSubject.next(true);
      });
  }

  // Add Todo
  addTodo(todo) {
    this.http.post(this.svcURL + "api/todos", todo)
      .subscribe(res => {
        this.todos = res;
        this.dataChangeSubject.next(true);
      })
  }

  removeTodo(todo) {
    this.http.delete(this.svcURL + "api/todos/" + todo._id)
    .subscribe(res => {
      this.todos = res;
      this.dataChangeSubject.next(true);
    });
  }

  editEvent(event, index) {
    this.http.put(this.svcURL + "api/events/" + event._id, event)
      .subscribe(res => {
        this.events = res;
        this.dataChangeSubject.next(true);
      });
  }

  // Todos
  getTodos(): Observable<any> {
    return this.http.get(this.svcURL + 'api/todos').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  editTodo(todo) {
    this.http.put(this.svcURL + "api/todos/" + todo._id, todo)
      .subscribe(res => {
        this.todos = res;
        this.dataChangeSubject.next(true);
      });
  }

}