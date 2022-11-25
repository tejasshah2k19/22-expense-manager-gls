import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  userId: string = ""

  firstName = ""
  lastName = ""
  firstNameError = ""
  lastNameError = ""
  constructor(private router:Router,private ar: ActivatedRoute, private userService: UserService, private ts: ToastrService) {
    this.userId = ar.snapshot.params["userId"];
    this.userService.getUserByIdApi(this.userId).subscribe(resp => {
      if (resp.status == 200) {
        this.firstName = resp.data.firstName;
        this.lastName = resp.data.lastName;
      }
    }, err => {
      console.log(err);
      ts.error("Something went Wrong Please TryAgain!!!", "", { timeOut: 3000 })
    })
  }

  updateUser() {
    
    let user = { "userId":this.userId,"firstName":this.firstName,"lastName":this.lastName}

    this.userService.updateUser(user).subscribe(resp => {

      this.ts.success("User modified..", "", { timeOut: 3000 })
      this.router.navigateByUrl("/admin/listusers")
    }, err => {

      this.ts.error("Something went Wrong Please TryAgain!!!", "", { timeOut: 3000 })
    })
  }
}
