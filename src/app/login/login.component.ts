import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ""
  password = ""

  constructor(private sessionService: SessionService,private router:Router) { }

  ngOnInit(): void {
  }

  login() {
    let user = { "email": this.email, "password": this.password }
    this.sessionService.loginApi(user).subscribe(resp => {
      if (resp.status == -1) {
        alert("invalid credentials")
      } else {
        console.log(resp.data);
        if(resp.data.role.roleName == "customer"){
          this.router.navigateByUrl("/customer/home")
        }else if(resp.data.role.roleName == "admin"){
          this.router.navigateByUrl("/admin/dashboard")
        }
        alert("valid credentials")
      }
    })
  }

}
