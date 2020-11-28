import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RulesGroupComponent } from './components/rules-group/rules-group.component';
import { RuleEntryComponent } from './components/rule-entry/rule-entry.component';
import { RulesService } from './services/rules.service';

@NgModule({
  declarations: [
    AppComponent,
    RulesGroupComponent,
    RuleEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    RulesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
