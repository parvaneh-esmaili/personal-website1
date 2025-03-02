import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team-members',
  imports: [NgFor, NgClass],
  templateUrl: './team-members.component.html',
  styleUrl: './team-members.component.scss',
})
export class TeamMembersComponent {
  TeamMembers = [
    {
      picture: 'https://placebeard.it/1280x720?random=9',
      name: 'Janic Valdes',
      title: 'Travel Agent',
      icon: 'fa fa-facebook ',
      icon1: 'fa fa-instagram ',
      icon2: 'fa fa-twitter ',
    },

    {
      picture: 'https://placebeard.it/1280x720random=8',
      name: 'Austin Griffin',
      title: 'travel Agent',
      icon: 'fa fa-facebook ',
      icon1: 'fa fa-instagram ',
      icon2: 'fa fa-twitter',
    },
    {
      picture: 'https://placebeard.it/1280x720random=7',
      name: 'Duris Hughes',
      title: 'travel Agent',
      icon: 'fa fa-facebook',
      icon1: 'fa fa-instagram',
      icon2: 'fa fa-twitter',
    },
    {
      picture: 'https://placebeard.it/1280x720random=6',
      name: 'Brain viliams',
      title: 'travel Agent',
      icon: 'fa fa-facebook',
      icon1: 'fa fa-instagram',
      icon2: 'fa fa-twitter',
    },
  ];
}
