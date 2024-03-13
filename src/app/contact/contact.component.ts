import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private apiService: ApiService) { }

  submitForm(): void {
    this.apiService.submitContactForm(this.formData).subscribe(
      response => {
        console.log('Contact form submitted successfully');
        // TODO: Display a success message to the user
        this.resetForm();
      },
      error => {
        console.error('Error submitting contact form:', error);
        // TODO: Display an error message to the user
      }
    );
  }

  resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}