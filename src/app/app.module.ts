import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamEditComponent } from './team-edit/team-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
