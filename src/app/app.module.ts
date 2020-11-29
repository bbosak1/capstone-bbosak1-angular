import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EventServiceProvider } from './providers/event-service/event-service';
import { InputDialogServiceProvider } from './providers/input-dialog-service/input-dialog-service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { Events } from './events';
import { Todo } from './todo';
import { AlertComponent } from './_components';

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
        HomeComponent,
        Events,
        Todo,
        AlertComponent
    ],
    providers: [
        EventServiceProvider,
        InputDialogServiceProvider,
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };