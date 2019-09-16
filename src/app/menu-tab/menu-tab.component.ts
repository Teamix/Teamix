import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  public EnglishMenu = [
    { menuItem: 'Home', pageLink: 'home' }, { menuItem: 'Packs', pageLink: 'categories' },
    { menuItem: 'Dj Mixes', pageLink: 'store' }, { menuItem: 'About', pageLink: 'about' }, { menuItem: 'Contact', pageLink: 'contact' }
  ];

  public HebrewMenu = [
    { menuItem: 'צור קשר', pageLink: 'contact' }, { menuItem: 'אודות', pageLink: 'about' },
    { menuItem: 'מיקסים', pageLink: 'store' }, { menuItem: 'חבילות', pageLink: 'categories' }, { menuItem: 'דף בית', pageLink: 'home' }
  ];

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }



}
