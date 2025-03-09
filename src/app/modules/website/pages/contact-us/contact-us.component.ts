import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  imports: [FormsModule,NgFor,NgClass],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  submitForm() {
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Message:', this.message);
    alert('You have submited your message!');
  };
  contactDetales=[
    {icon:'fa fa-location-arrow' ,item:' Address'},
    {icon:'fa fa-phone' ,item:' 0912 345 6789'},
    {icon:'fa fa-send ' ,item:' gmail.com'}
  ]
}
