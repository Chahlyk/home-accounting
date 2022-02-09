import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {

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

  private getBill(): void {
    this.sub.add(
      this.billService.getBill()
        .subscribe(data => {
          localStorage.setItem('Bill', JSON.stringify(data));
        })
    );
  }

  private getCurrency(): void {
    this.sub.add(
      this.billService.getCurrency()
        .subscribe(data => {
          localStorage.setItem('Currency', JSON.stringify(data));
        })
    );
  }

}
