import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {Subscription} from 'rxjs';
import {IBill, ICurrency} from './bill.interface';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {

  public count: number[] = [];
  public dataSource: object[] = [];
  public show: boolean = false;
  private value!: number;
  private sub: Subscription = new Subscription();

  constructor(private billService: BillService) {
  }

  public ngOnInit(): void {
    this.getBill();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getBill(): void {
    this.sub.add(
      this.billService.getBill()
        .subscribe((data: IBill) => {
          this.value = data.value;
        })
    );
    this.sub.add(
      this.billService.getCurrency()
        .subscribe((data: ICurrency) => {
          for (const val of data.rates) {
            this.dataSource.push({currency: val.currency, rate: val.rate, date: data.date});
          }
          this.count = (data.rates.map(item => item.rate * this.value)).slice(0, 3);
          this.show = true;
        })
    );

  }

}
