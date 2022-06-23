import { Component, OnDestroy, OnInit } from '@angular/core';
import { HistoryService } from './history.service';
import { Subscription } from 'rxjs';
import { ICategory, IChart, IEvent } from './history.interface';
import { MatTableDataSource } from '@angular/material/table';
import { AddEventComponent } from '../record/add-event/add-event.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {

  public dataTable: IEvent[] = [];
  public dataSource!: MatTableDataSource<IEvent>;
  public dataChart: IChart[] = [];
  public show: boolean = false;
  private categories: ICategory[] = [];
  private preDataChart: IChart[] = [];
  private sub: Subscription = new Subscription();

  constructor(
    public dialog: MatDialog,
    private historyService: HistoryService,
    ) { }

  public ngOnInit(): void {
    this.getDataCategoryAndEvents();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddEventComponent, {
      data: this.categories,
      disableClose: true
    });
    this.sub.add(
      dialogRef.afterClosed()
        .subscribe((result: boolean) => {
          if (result) {
            this.getDataCategoryAndEvents();
          } else {
            return;
          }
        })
    );
  }

  private getDataCategoryAndEvents(): void {
    this.sub.add(
      this.historyService.getCategories()
        .subscribe((data: ICategory[]) => {
          this.categories = data;
          this.getEvents();
        })
    );
  }

  private getEvents(): void {
    this.dataTable = [];
    this.sub.add(
      this.historyService.getEvents()
        .subscribe((data: IEvent[]) => {
          data.forEach((val: IEvent) => {
            this.dataTable.push({...val, category: this.getCategory(val)});
            }
          );
          this.dataSource = new MatTableDataSource(this.dataTable);
          this.getDataChart();
        })
    );
  }

  private getCategory(event: IEvent): string {
    const category: ICategory | undefined = this.categories.find(item => item.id === event.category);
    if (category !== undefined) {
      return category.name;
    } else {
      return 'not found';
    }
  }

  private getDataChart(): void {
    this.preDataChart = [];
    this.dataChart = [];
    this.dataTable.forEach((item: IEvent) => this.preDataChart.push({name: item.category, y: +item.amount}));
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
