import { Component, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-dj-sets',
  templateUrl: './dj-sets.component.html',
  styleUrls: ['./dj-sets.component.scss']
})
export class DjSetsComponent implements OnInit {

  constructor(public mobileCheckService: MobileCheckService, public languageService: LanguageService) { }

  ngOnInit() {
  }

}
