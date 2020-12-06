import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventServiceProvider } from './providers/event-service/event-service';
import { InputDialogServiceProvider } from './providers/input-dialog-service/input-dialog-service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { Events } from './events';
import { Todo } from './todo';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        IonicModule.forRoot(),
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        Events,
        Todo,
    ],
    providers: [
        EventServiceProvider,
        InputDialogServiceProvider,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };