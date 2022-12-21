import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../service/expense.service';
// import { Chart } from 'chart.js';
import Chart from 'chart.js/auto';

// import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private expService: ExpenseService) { }
  chart: any;
  expenses: Array<any> = []
  cuurentYearExpense: Array<any> = []
  totalExp = 0
  currentYearTotalExp = 0;
  monthWiseExp: Array<any> = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  exp: Array<number> = []
  ngOnInit(): void {
    this.expService.getThisMonthExpApi().subscribe(resp => {
      this.expenses = resp.data;
      console.log(this.expenses);
      for (let i = 0; i < this.expenses.length; i++) {
        this.totalExp = this.totalExp + parseInt(this.expenses[i].amount);

      }
    })

    this.expService.getCurrentYearExp().subscribe(resp => {
      this.cuurentYearExpense = resp.data;
      console.log(resp.data);//jan feb march -- 2022 
      //{_id: '63875a3be46c6722d41baa76', amount: 2500, date: '2022-11-10', payee: 'Lapinozz', paymentmode: 'cash', …}
      //_id: '638f580ab2cc7f0e13d6b4bd', amount: 5000, date: '2022-11-10', payee: 'WM', paymentmode: 'cash',
      //
      for (let i = 0; i < this.cuurentYearExpense.length; i++) {
        this.currentYearTotalExp = this.currentYearTotalExp + this.cuurentYearExpense[i].amount;

        let d = new Date(this.cuurentYearExpense[i].date)
        //console.log(d.getMonth());
        //console.log(this.monthWiseExp[d.getMonth()]);
        this.monthWiseExp[d.getMonth()] = this.monthWiseExp[d.getMonth()] + this.cuurentYearExpense[i].amount;



      }
      console.log(" 1==> " + this.monthWiseExp);
      console.log(this.monthWiseExp.length);
      for (let i = 0; i < this.monthWiseExp.length; i++) {
          this.exp.push(this.monthWiseExp[i]);
      }


      console.log(this.monthWiseExp);
      console.log(this.exp);

      this.chart = new Chart("chart", {
        type:'bar',
        data: {
          labels: ["Jan", "Feb","March","April","May","June","July","Aug","Sep","Oct","Nov","Dec"],
          datasets: [
            {
              label: "Expense",
              data: this.exp,
              backgroundColor: "#198ae3"
            }
          ]
        }
      })


    })
  }

  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];




}
