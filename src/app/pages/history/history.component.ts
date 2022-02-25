import {Component, OnDestroy, OnInit} from '@angular/core';
import {HistoryService} from './history.service';
import {Subscription} from 'rxjs';
import {ICategories, IEvents} from './history.interface';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit, OnDestroy {

  public dataSource: IEvents[] = [];
  public show: boolean = false;
  private categories: ICategories[] = [];
  private sub: Subscription = new Subscription();

  constructor(private historyService: HistoryService) { }

  public ngOnInit(): void {
    this.getDataCategoryAndEvents();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
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
            this.dataSource.push({
              id: val.id,
              type: val.type,
              date: val.date,
              category: this.getCategory(val),
              amount: val.amount,
              description: val.description
            });
          }
          this.show = true;
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
