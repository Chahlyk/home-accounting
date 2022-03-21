import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvents } from '../history.interface';
import { HistoryService } from '../history.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit, OnDestroy {

  public class!: boolean;
  public event!: IEvents;
  private sub: Subscription = new Subscription();

  constructor(
    private historyService: HistoryService,
    private route: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    this.getEvent();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  private getEvent(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.sub.add(
      this.historyService.getEvent()
        .subscribe((data: IEvents[]) => {
          this.event = data[id - 1];
          this.class = this.event.type === 'income';
        })
    );
  }

}
