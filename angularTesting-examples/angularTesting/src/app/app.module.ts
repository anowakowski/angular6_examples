import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { MessageService } from './message.service';

@NgModule({
   declarations: [
      AppComponent,
      AlertButtonComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [
      MessageService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
