import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  public hide: boolean = true;
  public form: any;

  public getErrorMessage(): string {
    if (this.password.hasError('required')) {
      return 'Please, enter a value';
    } else {
      return this.password.hasError('minLength') ? 'Your password must be at least 6 characters' : '';
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm(): any {
    return this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6) ,Validators.required]),
    })
  }

}
