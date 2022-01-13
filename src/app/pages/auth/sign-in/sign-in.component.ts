import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../auth.service";
import { IUser } from "../../../shared/interfaces";
import { Router } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public hide: boolean = true;
  public auth: boolean = false;
  public form!: FormGroup;
  public authCode!: string;

  public constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  public ngOnInit(): void {
    this.buildForm();
  }

  public getUserEmail(): void {
    const email = {...this.form.value}
    this.authService.getUser(email.email)
      .subscribe((data: Array<IUser>) => {
        setTimeout(() => {
          if (data.length === 0) {
          this.authCode = 'notExist';
        } else {
          if (email.password === data[0].password) {
            this.authCode = 'exactly';
            this.router.navigate(['/bill']);
          } else {
            this.authCode = 'incorrect';
          }}
        }, 5000);
        this.authCode = 'waiting';
        })
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6) ,Validators.required]),
    })
  }

}
