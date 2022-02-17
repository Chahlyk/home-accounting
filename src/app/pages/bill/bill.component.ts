import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {Subscription} from 'rxjs';
import {IBill, ICurrency, IRate} from './bill.interface';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {

  public bill!: IBill;
  public currency!: ICurrency;
  public amount: number[] = [];
  public dataSource: IRate[] = [];
  public show: boolean = false;
  private value!: number;
  private sub: Subscription = new Subscription();

  constructor(private billService: BillService) {
  }

  public ngOnInit(): void {
    this.getBill();
    this.getCurrency();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public getBill(): void {
    this.sub.add(
      this.billService.getBill()
        .subscribe(data => {
          this.bill = data;
          this.getAmount();
          this.getDataSource();
        })
    );
  }

  public getCurrency(): void {
    this.sub.add(
      this.billService.getCurrency()
        .subscribe(data => {
          this.currency = data;
          this.getAmount();
          this.getDataSource();
        })
    );
  }

  private getDataSource(): void {
    if (this.currency !== undefined) {
      this.show = true;
      const data: any = this.currency.rates;
      for (const val in data) {
        this.dataSource.push({currency: val, rate: data[val], date: this.currency.date});
      }
    }
  }

  private getAmount(): void {
    if (this.bill !== undefined && this.currency !== undefined) {
      this.show = true;
      let bill!: any;
      this.value = this.bill.value;
      bill = this.currency.rates;
      for (const val in bill ) {
        this.amount.push(bill[val] * this.value);
      }
    }
  }

}
