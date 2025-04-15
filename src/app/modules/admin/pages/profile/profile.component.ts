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
  {name:'ali',email:'aaa@gmail.com', message:'hello personal website'},
  {name:'hana',email:'aaa@gmail.com', message:'hello personal website'},
  {name:'roya',email:'aaa@gmail.com', message:'hello personal website'},
  {name:'sina',email:'aaa@gmail.com', message:'hello personal website'}
]
}
