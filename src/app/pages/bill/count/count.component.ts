import {Component, Input, OnChanges} from '@angular/core';
import {IBill, ICurrency} from '../bill.interface';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnChanges {

  @Input() public bill!: IBill;
  @Input() public currency!: ICurrency;

  public amount: number [] = [];
  public show: boolean = false;
  private value!: number;


  public ngOnChanges(): void {
    this.getBill();
  }

  private getBill(): void {
    if (this.bill !== undefined && this.currency != undefined) {
      this.show = true;
      let bill!: any;
      this.value = this.bill.value;
      bill = this.currency.rates;
      for (const val in bill ) {
        this.amount.push(bill[val] * this.value);
      }
    } else {
      return;
    }
  }
}

