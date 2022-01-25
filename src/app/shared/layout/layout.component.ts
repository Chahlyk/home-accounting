import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  public state!: boolean;

  public onClick(state: boolean): void {
    this.state = state;
  }

  public ngOnInit(): void {
  }

}
