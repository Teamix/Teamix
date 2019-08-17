import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material";


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public numOfLinks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

}
