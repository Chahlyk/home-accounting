import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from "../../interfaces";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @ViewChild('drawer', {static: false})
  public drawer: any;

  public ngOnInit(): void {
    this.getUser();
  }

  public show(): void {
    this.drawer.toggle();
  }

  public userData!: IUser;

  public getUser(): void {
    this.userData = JSON.parse(<string>localStorage.getItem('User'));
  }

}
