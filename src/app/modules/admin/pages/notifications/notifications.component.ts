import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [NgFor],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.scss'
})
export class NotificationsComponent {
  header=[
    {item:'Event'},
    {item:'Description'},
    {item:'Date'}

  ];
table=[
  {event:'Log In',description:'someone loged in', date:'29.3.2025'},
  {event:'Media',description:'new media', date:'20.3.2025'},
  {event:'Share',description:'someone shared a file', date:'12.3.2025'},
  {event:'Log In',description:'someone loged in', date:'2.3.2025'},
  {event:'Media',description:'A media is edited by someone', date:'29.2.2025'},
]
}
