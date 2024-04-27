import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { SuccessAlert } from './success-alert/success-alert.component';
import { WarningAlert } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { AddServerComponent } from './add-server/add-server.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessAlert,
    WarningAlert,
    ServerComponent,
    AddServerComponent,
    DetailsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
