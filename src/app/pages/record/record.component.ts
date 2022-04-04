import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecordService } from './record.service';
import { Subscription } from 'rxjs';
import { ICategories } from '../history/history.interface';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnDestroy {

  public dataSource: ICategories[] = [];
  public show: boolean = false;

  private sub: Subscription = new Subscription();

  constructor(private recordService: RecordService) { }

  public ngOnInit(): void {
    this.getCategory();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getCategory(): void {
    this.sub.add(
      this.recordService.getCategories()
        .subscribe((data: ICategories[]) => {
          this.dataSource = data;
          this.show = true;
        })
    );
  }

}
