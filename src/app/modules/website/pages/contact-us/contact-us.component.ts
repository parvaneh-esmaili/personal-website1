import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from "./contact-form/contact-form.component";


@Component({
  selector: 'app-contact-us',
  imports: [FormsModule, NgFor, NgClass, ContactFormComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  contactDetales=[
    {icon:'fa fa-location-arrow' ,item:' Address'},
    {icon:'fa fa-phone' ,item:' 0912 345 6789'},
    {icon:'fa fa-send ' ,item:' gmail.com'}
  ]
  onFormSubmitted(data: { 
    name: string;
    email: string;
    message: string
   })
   
   {console.log('پیام کاربر دریافت شد:', data);};
}
