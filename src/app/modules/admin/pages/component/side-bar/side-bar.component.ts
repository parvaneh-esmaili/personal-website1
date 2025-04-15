import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileComponent } from "../../profile/profile.component";

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, NgClass, RouterLink, ProfileComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  sideBarItems=[
    {logo:'fa fa-bar-chart', item:' Dashbord', link:'' },
    {logo:'fa fa-bar-chart', item:' Profile', link:'/profile'},
    {logo:'fa fa-bar-chart', item:'Folders', link:''},
    {logo:'fa fa-bar-chart', item:'Notifications', link:''},
    {logo:'fa fa-bar-chart', item:'Messages', link:''},
    {logo:'fa fa-bar-chart', item:'Help center', link:''},
    {logo:'fa fa-bar-chart', item:'Setting', link:''},
  ]
items: any;

}
