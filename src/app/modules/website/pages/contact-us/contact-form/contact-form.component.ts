import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  @Output() formSubmitted = new EventEmitter<{ name: string; email: string; message: string }>();

  submitForm() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    this.formSubmitted.emit(formData); 
    alert('Your message submitted successfully!');
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
