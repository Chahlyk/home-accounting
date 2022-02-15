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

  public bill!: IBill;
  public currency!: ICurrency;
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
        })
    );
  }

  public getCurrency(): void {
    this.sub.add(
      this.billService.getCurrency()
        .subscribe(data => {
          this.currency = data;
        })
    );
  }

}
