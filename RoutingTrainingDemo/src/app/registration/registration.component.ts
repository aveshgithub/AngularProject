import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model;
  listingArray = [];
  // RegistrationForm = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   email: new FormControl(''),
  //   passwd: new FormControl(''),
  //   country: new FormControl('')
  // });
  private RegistrationForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.RegistrationForm = fb.group({
      firstName: '',
      lastName: '',
      email: '',
      passwd: '',
      country: ''
    });
  }
  saveFormData() {
    // TODO: Use EventEmitter with form value
    this.listingArray.push(this.RegistrationForm.value);
    console.log(this.listingArray);
  }
  ngOnInit() {
  }

}
