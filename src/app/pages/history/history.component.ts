import {Component, OnDestroy, OnInit} from '@angular/core';
import {HistoryService} from './history.service';
import {Subscription} from 'rxjs';
import {ICategories, IChart, IEvents} from './history.interface';
import {MatTableDataSource} from '@angular/material/table';

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
  private sub: Subscription = new Subscription();

  constructor(private historyService: HistoryService) {
    this.dataSource = new MatTableDataSource(this.dataTable);
  }

  public ngOnInit(): void {
    this.getDataCategoryAndEvents();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getDataChart(): void {
    const data: IChart[] = [];
    for (const val of this.dataTable) {
      data.push({name: val.category, y: val.amount});
    }
    this.dataChart.push(data[0]);
    for (const val of data.slice(1)) {
      if (this.dataChart.find(item => item.name === val.name ? item.y += val.y : this.dataChart.push(val))) {

      }
    }
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
          for (const val of data) {
            this.dataTable.push({
              id: val.id,
              type: val.type,
              date: val.date,
              category: this.getCategory(val),
              amount: val.amount,
              description: val.description
            });
          }
          this.show = true;
          this.getDataChart();
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

}
