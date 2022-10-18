import { Component, OnInit } from '@angular/core';
import { SessionService } from '../service/session.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private sessionService:SessionService) { }
  email = ""
  ngOnInit(): void {
  }
  forgetpassword() {
    let user = {"email":this.email}
    this.sessionService.forgetPasswordApi(user).subscribe(resp=>{
        if(resp.status == 200){
          alert("OTP SENT");
          alert(resp.data)
        }else{
          alert("Invalid Email")
        }
    })
  }

}
