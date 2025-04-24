import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashbordComponent} from './pages/dashbord/dashbord.component';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { HelpCenterComponent } from './pages/help-center/help-center.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SettingComponent } from './pages/setting/setting.component';
import { FoldersComponent } from './pages/folders/folders.component';

const routes: Routes = [
  {path: '', component: AdminComponent, children:
    [
      {path:'', component:DashbordComponent, pathMatch:'full'},
      {path:'dashbord', component:DashbordComponent},
      {path:'profile', component:ProfileComponent},
      {path:'messages', component:MessagesComponent},
      {path:'help-center', component:HelpCenterComponent},
      {path:'notifications', component:NotificationsComponent},
      {path:'setting', component:SettingComponent},
      {path:'folders', component:FoldersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
