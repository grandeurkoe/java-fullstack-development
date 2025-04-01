import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent {
  regForm = new FormGroup({
    // Autofill form with these values.
    firstName : new FormControl("Vishal", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    lastName : new FormControl("Kushwaha", [Validators.required]),
    emailId : new FormControl("connect.vishalnow@gmail.com", [Validators.required, Validators.email]),
    mobileNo : new FormControl("9930895622", [Validators.required, Validators.pattern('[0-9]{10}')]),
    age : new FormControl(27, [Validators.min(18)])
  });
  
  register() {
    console.log(this.regForm.value);
  }
}
