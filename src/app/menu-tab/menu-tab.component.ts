import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  public menu = [{menuItem: 'Home', pageLink: 'home'}, {menuItem: 'Packs', pageLink: 'categories'},
  {menuItem: 'Dj Mixes', pageLink: 'store'}, {menuItem: 'About', pageLink: 'about'}, {menuItem: 'Contact', pageLink: 'contact'}];

  constructor() { }

  ngOnInit() {
  }



}
