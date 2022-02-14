import { Component, OnInit } from '@angular/core';
import {IBill } from '../bill.interface';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent implements OnInit {

  public displayedColumns: string[] = ['value'];
  public dataSource: IBill[] = [];
  private value!: number;

  constructor() { }

  public ngOnInit(): void {
    this.getBill();
  }

  private getBill(): void {
    let bill!: any;
    let value!: IBill;
    value = JSON.parse(localStorage.getItem('Bill') as string);
    this.value = value.value;
    bill = JSON.parse(localStorage.getItem('Currency') as string).rates;
    for (const val in bill ) {
      this.dataSource.push({currency: val, value: +(bill[val] * this.value).toFixed(2)});
    }
  }
}

