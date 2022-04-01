import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { RecordService } from '../record.service';
import { ICategories } from '../../history/history.interface';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit, OnDestroy {

  @Output() public clickChange: EventEmitter<boolean> = new EventEmitter();
  @Input() public addCategory: boolean = true;

  public form!: FormGroup;

  private sub: Subscription = new Subscription();

  constructor(private recordService: RecordService) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  public show(): void {
    this.addCategory = !this.addCategory;
    this.clickChange.emit(this.addCategory);
  }

  public addCategories(): void {
    const category: ICategories = {...this.form.value};
    this.sub.add(
      this.recordService.addCategory(category)
        .subscribe(() => {
          this.show();
        })
    );
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      name: new FormControl('', Validators.required),
      capacity: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+(?!.)/)])
    });
  }

}
