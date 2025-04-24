import { Component } from '@angular/core';


@Component({
  selector: 'app-dashbord',
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {
  radius = 16;
  circumference = 2 * Math.PI * this.radius;
  progress = 0.75;
  dashOffset = this.circumference * (1 - this.progress);
  
}
