import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ICurrency, IRate} from '../bill.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnChanges {

  @Input() public currency!: ICurrency;

  public displayedColumns: string[] = ['currency', 'rate', 'date'];
  public dataSource: IRate[] = [];
  public show: boolean = false;

  public ngOnChanges(): void {
    this.getCurrency();
  }

  private getCurrency(): void {
    if (this.currency !== undefined) {
      this.show = true;
      const data: any = this.currency.rates;
      for (const val in data) {
        this.dataSource.push({currency: val, rate: data[val], date: this.currency.date});
      }
    } else {
      return;
    }
  }

}
