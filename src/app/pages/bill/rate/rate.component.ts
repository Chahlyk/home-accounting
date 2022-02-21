import  {Component, Input} from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent {

  @Input() public dataSource: object[] = [];

  public displayedColumns: string[] = ['currency', 'rate', 'date'];

}
