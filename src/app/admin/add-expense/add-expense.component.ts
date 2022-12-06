import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent {

  amount = 0
  payee = ""
  paymentmode = "cash"
  status = "clear"
  description = ""
  date = ""
  constructor(private expService:ExpenseService,private toastrService:ToastrService,private router:Router){

  }
  saveExp() {

    let data = {
      "amount": this.amount, "payee": this.payee, "paymentmode": this.paymentmode, "status": this.status,
      "description": this.description, "date": this.date
    }
    console.log(data);
    this.expService.addExpApi(data).subscribe(resp=>{
      this.toastrService.success("Expenses Added","",{timeOut:3000})
      this.router.navigateByUrl("admin/listexpenses")
    })
  }
}
