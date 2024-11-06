import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.signupData.password !== this.signupData.confirmPassword) {
        alert("Passwords don't match!");
        return;
      }
      console.log('Form submitted', this.signupData);
      // Add your registration logic here
      // this.router.navigate(['/sign-in']);
    }
  }
}
