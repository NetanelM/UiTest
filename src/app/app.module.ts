import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { MetaDataService } from "./metaData/meta-data.service";
import { ToLowerCasePipe } from './pipe/to-lower-case.pipe';
import { WorkflowComponent } from './left-panel/workflow/workflow.component';
import { StatisticsComponent } from './left-panel/statistics/statistics.component';
import { CalendarComponent } from './left-panel/calendar/calendar.component';
import { UsersComponent } from './left-panel/users/users.component';
import { SettingsComponent } from './left-panel/settings/settings.component';
import { GenericListComponent } from './generic-list/generic-list.component';
import { HeaderScopeComponent } from './header-scope/header-scope.component';
import { HomeComponent } from "./left-panel/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    HomeComponent,
    ToLowerCasePipe,
    WorkflowComponent,
    StatisticsComponent,
    CalendarComponent,
    UsersComponent,
    SettingsComponent,
    GenericListComponent,
    HeaderScopeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MetaDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
