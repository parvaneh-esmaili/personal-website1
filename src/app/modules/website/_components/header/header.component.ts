import { NgFor} from '@angular/common';
import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    NgFor,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerLinkItems = [
    {title: 'Home', link: '/home'},
    {title: 'About', link: '/aboutUs'},
    {title: 'Services', link: '/ourServices'},
    {title: 'Contact', link: '/contactUs'}
  ]

}
