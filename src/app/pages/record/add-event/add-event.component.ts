import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { ICategory } from '../../history/history.interface';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit, OnDestroy {

  public form!: FormGroup;
  private sub: Subscription = new Subscription();

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ICategory[],
    public dialogRef: MatDialogRef<AddEventComponent>,
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
          this.dialogRef.close(true);
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
