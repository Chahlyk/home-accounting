import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {Subscription} from 'rxjs';
import {IBill, ICurrency, IRates} from './bill.interface';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {

  public count: IRates[] = [];
  public dataSource: IRates[] = [];
  public show: boolean = false;
  private value!: number;
  private sub: Subscription = new Subscription();

  constructor(private billService: BillService) {
  }

  public ngOnInit(): void {
    this.getDataCurrencyAndBill();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


  public getDataCurrencyAndBill(): void {
    this.show = false;
    this.sub.add(
      this.billService.getBill()
        .subscribe((data: IBill) => {
            this.value = data.value;
            this.getCurrency();
        })
    );
  }

  private getCurrency(): void {
    this.dataSource = [];
    this.count = [];
    this.sub.add(
      this.billService.getCurrency()
        .subscribe((data: ICurrency) => {
          for (const val of data.rates.slice(0, 3)) {
            this.dataSource.push({currency: val.currency, rate: val.rate, date: data.date});
          }
          for (const val of data.rates.slice(0, 3)) {
            this.count.push({currency: val.currency, rate: val.rate * this.value});
          }
          this.show = true;
        })
    );
  }

}

