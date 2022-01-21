import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICurrency } from "../../shared/interfaces";
import { BillService } from "./bill.service";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit, OnDestroy {

  public rate!: ICurrency;
  private sub: Subscription = new Subscription();


  public constructor(private billService: BillService) { }

  public ngOnInit(): void {
    this.getRate();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getRate(): void {
    this.sub.add(
      this.billService.getRate()
        .subscribe((data: ICurrency) => {
          this.rate = data;
        })
    )
  }

}
