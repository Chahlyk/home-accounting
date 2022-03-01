import {Component, OnDestroy, OnInit} from '@angular/core';
import {IEvents} from '../../history.interface';
import {HistoryService} from '../../history.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit, OnDestroy {

  public event!: IEvents;
  private sub: Subscription = new Subscription();

  constructor(private historyService: HistoryService) { }

  public ngOnInit(): void {
    this.getEvent();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getEvent(): void {
    this.sub.add(
      this.historyService.getEvent()
        .subscribe(data => {
          this.event = data.data;
        })
    );
  }

}
