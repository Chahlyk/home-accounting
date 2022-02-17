import  {Component, Input} from '@angular/core';
import {IRate} from '../bill.interface';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  @Input() public dataSource: IRate[] = [];

  public displayedColumns: string[] = ['currency', 'rate', 'date'];

}
