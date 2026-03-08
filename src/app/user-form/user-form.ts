import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [ FormsModule ],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  title = 'User Form';
  firstName = '';
  lastName = '';
  email = '';  

  onSubmit(event: Event) {
    event.preventDefault();
    console.log('Form submitted! First Name:', this.firstName, 'Last Name:', this.lastName, 'Email:', this.email);
  }
}
