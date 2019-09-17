import { Component, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public mobileCheckService: MobileCheckService, public languageService: LanguageService) { }

  ngOnInit() {
  }

  public changeMyView() {
    this.mobileCheckService.changeWebsiteView();
  }

}
