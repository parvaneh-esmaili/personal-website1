import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-dashbord',
  imports: [],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.scss'
})
export class DashbordComponent {
  numbers=[
    {number:1},
    {number:2},
    {number:3},
    {number:4},
    {number:5},
    {number:6},
    {number:7},
    {number:8}

  ]
}
