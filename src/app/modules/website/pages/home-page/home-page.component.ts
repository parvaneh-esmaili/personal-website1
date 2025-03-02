
import { Component } from '@angular/core';
import { CardsComponent } from "./cards/cards.component";

@Component({
  selector: 'app-home-page',
  imports: [CardsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
