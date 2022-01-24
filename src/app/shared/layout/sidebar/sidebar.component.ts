import { Component, OnInit } from '@angular/core';
import { IUser } from "../../../pages/auth/auth.interface";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public userData!: IUser;

  public ngOnInit(): void {
    this.getUser();
  }


  private getUser(): void {
    this.userData = JSON.parse(<string>localStorage.getItem('User'));
  }

}
