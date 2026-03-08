import { Component, signal } from '@angular/core';
//import { UserForm } from './user-form/user-form';
import { UserFormRx } from "./user-form-rx/user-form-rx";

@Component({
  selector: 'app-root',
  imports: [ UserFormRx ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularAWSTestApp');
}
