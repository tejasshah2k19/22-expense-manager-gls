import { Component } from '@angular/core';
import { ExpenseService } from '../service/expense.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.css']
})
export class ListExpenseComponent {

  expenses: Array<any> = []
  dtOptions: any = {

  }
  constructor(private expService: ExpenseService) {
    this.expService.getAllExpApi().subscribe(resp => {
      this.expenses = resp.data;
      this.dtOptions = {

        search: {
          return: true,
        },
        dom: 'Bfrtip',
        buttons: [
          'copy', 'csv', 'excel', 'pdf', 'print'
        ],
        export:true
      }
    })
  }
}
