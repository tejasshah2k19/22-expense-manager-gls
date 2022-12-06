import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private expService:ExpenseService) { }

  expenses:Array<any> = []
  cuurentYearExpense:Array<any> = []
  totalExp=0
  currentYearTotalExp = 0 ;
  ngOnInit(): void {
    this.expService.getThisMonthExpApi().subscribe(resp=>{
      this.expenses = resp.data;
      console.log(this.expenses);
      for(let i=0;i<this.expenses.length;i++){
        this.totalExp  = this.totalExp + parseInt(this.expenses[i].amount);
      }
    })

    this.expService.getCurrentYearExp().subscribe(resp=>{
        this.cuurentYearExpense = resp.data; 
        for(let i=0;i<this.cuurentYearExpense.length;i++){
           this.currentYearTotalExp = this.currentYearTotalExp + this.cuurentYearExpense[i].amount; 
        }
    })
  }




}
