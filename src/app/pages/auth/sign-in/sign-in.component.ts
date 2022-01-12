import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { IUser } from "../../../shared/interfaces";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public hide: boolean = true;
  public auth: boolean = false;
  public form!: FormGroup;
  public user!: IUser;
  public dataUser!: IUser;

  public constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.buildForm();
    this.getUser();
  }

  private getUser(): void {
    this.authService.getUser()
      .subscribe((data:any) => {
        this.dataUser = data;
        console.log(this.dataUser)
      })
  }

  public signIn(): any {
    this.user = {...this.form.value};
    if ((this.user.email === this.dataUser.email) && (this.user.password === this.dataUser.password)) {
      this.auth = true;
    } else return;
    console.log(this.user, this.auth);
  }

  private buildForm(): void {
    this.form = new FormGroup( {
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6) ,Validators.required]),
    })
  }

}
