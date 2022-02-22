import {Component, Input} from '@angular/core';
import {getCurrencySymbol} from '@angular/common';
import {IRates} from '../bill.interface';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Input() public count!: IRates[];

  public getCurrencySymbol(value: string): string {
    return getCurrencySymbol(value, 'narrow');
  }

}

