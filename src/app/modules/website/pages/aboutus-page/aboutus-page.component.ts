import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TeamMembersComponent } from './team-members/team-members.component';

@Component({
  selector: 'app-aboutus-page',
  imports: [TeamMembersComponent
  ],
  templateUrl: './aboutus-page.component.html',
  styleUrl: './aboutus-page.component.scss'
})
export class AboutusPageComponent {


}
