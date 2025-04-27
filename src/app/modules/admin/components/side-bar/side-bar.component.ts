import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../../shares/button/button.component';

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, RouterLink, ButtonComponent],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  sideBarItems=[
    {logo:'fa fa-bar-chart', item:' Dashbord', link:'dashbord' },
    {logo:'fa fa-bar-chart', item:' Profile', link:'profile'},
    {logo:'fa fa-bar-chart', item:'Folders', link:'folders'},
    {logo:'fa fa-bar-chart', item:'Notifications', link:'notifications'},
    {logo:'fa fa-bar-chart', item:'Messages', link:'messages'},
    {logo:'fa fa-bar-chart', item:'Help center', link:'help-center'},
    {logo:'fa fa-bar-chart', item:'Setting', link:'setting'},
  ]
}
