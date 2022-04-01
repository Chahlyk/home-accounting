import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RecordService } from './record.service';
import { Subscription } from 'rxjs';
import { ICategories } from '../history/history.interface';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit, OnDestroy {

  public addCategory!: boolean;
  public addEvent!: boolean;
  public sub: Subscription = new Subscription();
  public dataSource: ICategories[] = [];
  public show: boolean = false;

  constructor(private recordService: RecordService) { }

  public ngOnInit(): void {
    this.getCategory();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
  public onClick(add: boolean): void {
    this.addCategory = add;
    this.addEvent = add;
    this.getCategory();
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
