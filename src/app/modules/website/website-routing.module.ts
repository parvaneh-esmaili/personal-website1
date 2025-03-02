import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebsiteComponent } from './website.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';



const routes: Routes = [
  {path: '', component: WebsiteComponent, children:
    [
      {path: '', component: HomePageComponent, pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'aboutUs', component: AboutusPageComponent},
      {path: 'contactUs', component: ContactUsComponent},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
