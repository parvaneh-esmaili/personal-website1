import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [NgFor, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  headerLinkItems = [
    { title: 'Home', link: '/home' },
    { title: 'About', link: '/aboutUs' },
    { title: 'Services', link: '/ourServices'},
    { title: 'Contact', link: '/contactUs' },
  ];
  navItems=[
    {item:'0912 345 6780'},
    {item:'Email'},  
    {icon:'fa fa-linkedin-square'},
    {icon:'fa fa-youtube'},
    {icon:'fa fa-twitter-square'},
    {icon:'fa fa-facebook-square'}

  ];
  bar=[
    {barIcon:"fa fa-bars"},
    {barIcon:'fa fa-search'}
  ]
}
