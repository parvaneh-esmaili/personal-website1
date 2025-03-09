import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [NgFor],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  Services =[
    {
    picture:'https://placebeard.it/1280x720?random=9',
    title:'OurServices',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi nihil labore beatae aliquid cumque',
    button:'learn more',
  },
  {
    picture:'https://placebeard.it/1280x720?random=8',
    title:'OurServices',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi nihil labore beatae aliquid cumque',
    button:'learn more',
  },
  {
    picture:'https://placebeard.it/1280x720?random=7',
    title:'OurServices',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus nisi nihil labore beatae aliquid cumque',
    button:'learn more',
  }
]
}
