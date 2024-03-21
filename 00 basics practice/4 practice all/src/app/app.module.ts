import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { AppServerComponent } from './app-server/app-server.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [AppComponent, SuccessAlert, WarningAlert, AppServerComponent, ServerComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
