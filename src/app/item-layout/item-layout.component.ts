import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';
import { LinksService } from 'src/services/links.service';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.scss']
})
export class ItemLayoutComponent implements OnInit {

  public check = false;
  public itemName: string;

  constructor(public linksService:LinksService, public itemService: ItemService, private route: ActivatedRoute, public mobileCheckService: MobileCheckService, public languageService: LanguageService, private router: Router) {
    this.itemName = route.snapshot.params['package'];
  }

  ngOnInit() {
  }



}
