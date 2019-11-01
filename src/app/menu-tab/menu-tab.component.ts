import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss']
})
export class MenuTabComponent implements OnInit {

  public EnglishMenu = [
    { menuItem: 'Home', pageLink: 'home' }, { menuItem: 'Packs', pageLink: 'packs/' },
    { menuItem: 'DJ Sets', pageLink: 'sets' }, { menuItem: 'About', pageLink: 'about' }, { menuItem: 'Contact', pageLink: 'contact' }
  ];

  public HebrewMenu = [
    { menuItem: 'צור קשר', pageLink: 'contact' }, { menuItem: 'אודות', pageLink: 'about' },
    { menuItem: 'סטים', pageLink: 'sets' }, { menuItem: 'חבילות', pageLink: 'packs/' }, { menuItem: 'דף בית', pageLink: 'home' }
  ];

  constructor(public languageService: LanguageService, private router: Router) { }

  ngOnInit() {
  }

public packGenreLink() {
  this.router.navigate(['packs/' + localStorage.getItem('choice') || 'All']);
}

}
