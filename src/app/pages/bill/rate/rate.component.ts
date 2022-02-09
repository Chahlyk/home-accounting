import {Component, OnInit} from '@angular/core';
import {ICurrency, IRate} from '../bill.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  public displayedColumns: string[] = ['currency', 'rate', 'date'];
  public dataSource: IRate[] = [];
  public rate!: ICurrency;

  constructor() { }

  public ngOnInit(): void {
    this.getCurrency();
  }

  private getCurrency(): void {
    this.rate = JSON.parse(localStorage.getItem('Currency') as string);
    const data: any = this.rate.rates;
    for (const val in data) {
      this.dataSource.push({currency: val, rate: data[val], date: this.rate.date});
    }
  }

}
