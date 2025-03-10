import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  imports: [NgFor, NgClass],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss',
})
export class TeamMembersComponent {
  TeamMembers = [
    {picture: 'https://placebeard.it/1280x720?random=9',name: 'Janic Valdes',title: 'Travel Agent'},
    {picture: 'https://placebeard.it/1280x720random=8',name: 'Austin Griffin',title: 'travel Agent'},
    {picture: 'https://placebeard.it/1280x720random=7',name: 'Duris Hughes',title: 'travel Agent'},
    {picture: 'https://placebeard.it/1280x720random=6',name: 'Brain viliams',title: 'travel Agent'}
  ];

    icons =[
      {icon: 'fa fa-facebook'},
      {icon: 'fa fa-instagram'},
      {icon: 'fa fa-twitter'}
    ]
}
