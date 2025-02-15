import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { WebsiteComponent } from './website.component';
import { AboutusPageComponent } from './pages/aboutus-page/aboutus-page.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurBlogComponent } from './pages/our-blog/our-blog.component';
import { OurProjectsComponent } from './pages/our-projects/our-projects.component';

const routes: Routes = [
  {path: '', component: WebsiteComponent, children:
    [
      {path: '', component: HomePageComponent, pathMatch: 'full'},

      {path: 'home', component: HomePageComponent},
      {path: 'aboutus', component: AboutusPageComponent},
      {path: 'our-services', component: OurServicesComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'our-blog', component: OurBlogComponent},
      {path: 'our-projects', component: OurProjectsComponent}

      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
