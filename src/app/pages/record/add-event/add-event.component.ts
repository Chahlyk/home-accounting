import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ICategories, IEvents } from '../../history/history.interface';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  @Input() public categories: ICategories[] = [];
  @Input() public addEvent: boolean = true;
  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  public category = new FormControl();
  public form!: FormGroup;

  private sub: Subscription = new Subscription();

  constructor(private recordService: RecordService) {
  }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public show(): void {
    this.addEvent = !this.addEvent;
    this.clickChange.emit(this.addEvent);
  }

  public addEvents(): void {
    const event: IEvents = this.form.value;
    event.date = new Date().toLocaleString();
    this.sub.add(
      this.recordService.addEvent(event)
        .subscribe(() => {
          this.show();
        })
    );
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
      description: new FormControl('', Validators.required),
    });
  }

}
