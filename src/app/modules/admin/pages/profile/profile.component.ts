import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-profile',
  imports: [NgFor],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  header=[
    {item:'Name'},
    {item:'Email'},
    {item:'Message'}

  ];
table=[
  {name:'ali',email:'ali@gmail.com', message:'Hello personal website'},
  {name:'hana',email:'hana@gmail.com', message:'Hello personal website'},
  {name:'roya',email:'roya@gmail.com', message:'Hello personal website'},
  {name:'sina',email:'sina@gmail.com', message:'Hello personal website'}
]
}
