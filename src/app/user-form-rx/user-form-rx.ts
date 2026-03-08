import { Component } from '@angular/core';
import { Form, FormControl, FormsModule, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form-rx',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-rx.html',
  styleUrl: './user-form-rx.css',
})

export class UserFormRx {
  title = 'User Form with Reactive Forms';
  
userFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

   onSubmit(event: Event) {

    event.preventDefault();
    console.log('Form submitted!', this.userFormGroup.value);
  }
}
