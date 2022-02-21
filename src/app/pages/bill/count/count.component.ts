import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css']
})
export class CountComponent {

  @Input() public count!: number[];

  public currencySymbols: string[] = ['€', '₴', '$'];

}

