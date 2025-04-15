import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from './pages/dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path:'', component:AdminComponent,children:
    [
      {path:'', component:DashbordComponent, pathMatch:'full'},
      {path:'dashbord', component:DashbordComponent},
      {path:'profile', component:ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
