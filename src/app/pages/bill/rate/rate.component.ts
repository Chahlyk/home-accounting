import {Component, Input, OnInit} from '@angular/core';
import {ICurrency, IP} from '../bill.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {

  @Input() public rate!: ICurrency;

  public displayedColumns: string[] = ['currency', 'rate', 'date'];
  public dataSource: IP[] = [];

  constructor() { }

  public ngOnInit(): void {
    this.dataSourceBuilder();
    console.log(this.dataSource);
  }

  public dataSourceBuilder(): void {
    setTimeout(() => {
      const data: any = this.rate.rates;
      for (const val in data) {
        this.dataSource.push({currency: val, rate: data[val], date: this.rate.date});
      }
    }, 500);
  }

}
