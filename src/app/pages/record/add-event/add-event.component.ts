import { Component, Inject, NgIterable, OnDestroy, OnInit } from '@angular/core';
import { ICategories, IEvents } from '../../history/history.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';
import { RecordComponent } from '../record.component';
import { HistoryComponent } from '../../history/history.component';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  private sub: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategories[],
    public dialogRef: MatDialogRef<RecordComponent, HistoryComponent>,
    private recordService: RecordService) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public addEvents(): void {
    this.sub.add(
      this.recordService.addEvent(this.form.value)
        .subscribe(() => {
          this.dialogRef.close();
        })
    );
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      category: new FormControl('', Validators.required),
      type: new FormControl('', Validators.required),
      amount: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)]),
      description: new FormControl('', Validators.required),
      date: new FormControl(new Date().toLocaleString()),
    });
  }

}
