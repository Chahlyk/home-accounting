import { Component, Inject, NgIterable } from '@angular/core';
import { ICategories } from '../../history/history.interface';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: NgIterable<ICategories>) { }

}
