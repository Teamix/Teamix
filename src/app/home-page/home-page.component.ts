import { Component, OnInit } from '@angular/core';
import { LinksService } from 'src/services/links.service';
import { MobileCheckService } from 'src/services/mobile-check.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public linksService: LinksService, public mobileCheckService: MobileCheckService) { }

  ngOnInit() {
    this.linksService.setPacksValue();
  }


}
