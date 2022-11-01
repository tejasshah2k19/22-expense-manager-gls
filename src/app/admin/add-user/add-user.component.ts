import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  firstName = ""
  email = ""
  lastName = ""
  password = "" 

  firstNameError = "" 
  lastNameError = ""
  emailError = ""
  passwordError = "" 

  constructor() { }

  ngOnInit(): void {
  }

}
