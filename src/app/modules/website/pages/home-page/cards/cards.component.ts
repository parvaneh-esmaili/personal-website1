import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-cards',
  imports: [
    NgFor,
    NgClass
],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
CardItems = [
  {icon:'fa fa-users ', title:'Consolting', discription:'Lorem ipsum dolor sit amet.'},
  {icon:'fa fa-bar-chart', title:'Marketing', discription:'Lorem ipsum dolor sit amet.'},
  {icon:'fa fa-archive', title:'Resources', discription:'Lorem ipsum dolor sit amet.'},
  {icon:'fa fa-money', title:'Finance', discription:'Lorem ipsum dolor sit amet.'}
]  
}
