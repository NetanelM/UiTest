import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./left-panel/home/home.component";
import { WorkflowComponent } from './left-panel/workflow/workflow.component';
import { StatisticsComponent } from './left-panel/statistics/statistics.component';
import { CalendarComponent } from './left-panel/calendar/calendar.component';
import { UsersComponent } from './left-panel/users/users.component';
import { SettingsComponent } from './left-panel/settings/settings.component';

const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'workflow', component: WorkflowComponent},
  {path: 'statistics', component: StatisticsComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'users', component: UsersComponent},
  {path: 'settings', component: SettingsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
