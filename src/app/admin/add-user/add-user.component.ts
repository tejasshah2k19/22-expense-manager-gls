import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';
import { UserService } from '../service/user.service';

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
  role = ""

  firstNameError = ""
  lastNameError = ""
  emailError = ""
  passwordError = ""

  roles: Array<any> = []
  constructor(private sessionService:SessionService,private userService:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userService.getAllRolesApi().subscribe(resp => {
      this.roles = resp.data; // roleid rolename 
      console.log(this.roles);

    })
  }
  saveUser() {

    let isError = false
    console.log(this.firstName);
    console.log(this.lastName);
    console.log(this.email);
    console.log(this.password);
    console.log(this.role);
    

    if (this.firstName == "" || this.firstName.trim().length == 0) {
      this.firstNameError = "Please Enter FirstName"
      isError = true
    } 
    else if( /^[a-zA-Z]+$/.test(this.firstName) == false){
      this.firstNameError = "Please Enter Valid Name"
      isError = true
    }
    else {
      this.firstNameError = ""
    }

    if (this.lastName == "" || this.lastName.trim().length == 0) {
      this.lastNameError = "Please Enter LastName"
      isError = true
    } else {
      this.lastNameError = ""
    }

    if (this.email == "" || this.email.trim().length == 0) {
      this.emailError = "Please Enter Email"
      isError = true
    } else {
      this.emailError = ""
    }


    if (this.password == "" || this.password.trim().length == 0) {
      this.passwordError = "Please Enter Password"
      isError = true
    } else if (this.password.trim().length <= 3) {
      this.passwordError = "Password contains atleast 4 characters"
      isError = true
    } else {
      this.passwordError = ""
    }



    //
    if (isError == true) {
      //do nothing...
    } else {
      //api call and save data into db 
      let user = { "firstName": this.firstName, "lastName": this.lastName, "email": this.email, "password": this.password, "role":this.role }
      this.sessionService.signupApi(user).subscribe(resp => {
        console.log(resp);
        if (resp.status == 200) {
          // alert("signup done")
          this.router.navigateByUrl("/admin/listusers")
        } else {
          // alert("SMWR")
        }

      });
      //
      //


    }

  }

}
