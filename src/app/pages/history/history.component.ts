import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { ICategories, IChart, IEvents } from './history.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventComponent } from '../record/add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {

  public dataTable: IEvents[] = [];
  public dataSource!: MatTableDataSource<IEvents>;
  public dataChart: IChart[] = [];
  public show: boolean = false;
  private categories: ICategories[] = [];
  private preDataChart: IChart[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    private historyService: HistoryService,
    public dialog: MatDialog) { }

  public ngOnInit(): void {
    this.getDataCategoryAndEvents();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      data: this.categories
    });
    this.sub.add(
      dialogRef.afterClosed()
        .subscribe(() => {
          this.show = false;
          this.dataTable = [];
          this.dataChart = [];
          this.preDataChart = [];
          this.categories = [];
          this.getDataCategoryAndEvents();
        })
    );
  }

  private getDataCategoryAndEvents(): void {
    this.sub.add(
      this.historyService.getCategories()
        .subscribe((data: ICategories[]) => {
          this.categories = data;
          this.getEvents();
        })
    );
  }

  private getEvents(): void {
    this.sub.add(
      this.historyService.getEvents()
        .subscribe((data: IEvents[]) => {
          data.forEach((val: IEvents) => this.dataTable.push({...val, category: this.getCategory(val)}));
          this.dataSource = new MatTableDataSource(this.dataTable);
          this.getDataChart();
          this.historyService.sendEvent(this.dataTable);
        })
    );
  }

  private getCategory(event: IEvents): string {
    const category: ICategories | undefined = this.categories.find(item => item.id === event.category);
    if (category !== undefined) {
      return category.name;
    } else {
      return 'not found';
    }
  }

  private getDataChart(): void {
    this.dataTable.forEach((item: IEvents) => this.preDataChart.push({name: item.category, y: +item.amount}));
    if (this.dataChart.length !== 0) {
      this.dataChartFilter();
    } else {
      this.dataChart.push(this.preDataChart[0]);
      this.preDataChart.shift();
      this.dataChartFilter();
    }
  }

  private dataChartFilter(): void {
    this.dataChart.map((item: IChart) => {
      this.preDataChart.map((val: IChart) => {
        item.name === val.name ? item.y += val.y : this.dataChart.push(val);
        this.show = true;
      });
    });
  }

}
