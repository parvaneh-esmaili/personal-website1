import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './_components/header/header.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import { FooterComponent } from './_component/footer/footer.component';

@Component({
  selector: 'app-website',
  imports: [
    HeaderComponent,
    RouterOutlet,
    FooterComponent
],
  templateUrl: './website.component.html',
  styleUrl: './website.component.scss'
})
export class WebsiteComponent {

}
