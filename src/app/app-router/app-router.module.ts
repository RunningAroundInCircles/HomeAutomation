/// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/// Services

/// Components
import { DashbordComponent } from '../dashbord/dashbord.component';
import { SettingsComponent } from '../settings/settings.component';

const appRoutes: Routes = [
  {path:'dashbord', component: DashbordComponent},
  {path:'settings', component: SettingsComponent},
  {path: '', redirectTo: '/dashbord', pathMatch: 'full'},
  {path: '**', component: DashbordComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
