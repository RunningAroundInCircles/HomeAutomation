/// Modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

/// Services

/// Components
import { DashbordComponent } from '../dashbord/dashbord.component';

const appRoutes: Routes = [
  {path:'dashbord', component: DashbordComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRouterModule { }
