import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.scss']
})
export class ItemLayoutComponent implements OnInit {

  public check = false;
  public itemName: string;
  public item: any;

  constructor(public itemService: ItemService, private route: ActivatedRoute, public mobileCheckService: MobileCheckService, public languageService: LanguageService, private router: Router) {
    this.itemName = route.snapshot.params['package'];
  }

  ngOnInit() {
    this.itemService.setSingleItem(this.itemName);
    //can change it for one check if yes do nothing if no route to home page!!VVVVVVVVV
    if (this.item != null || this.itemService.getSingleItem() != null) {
      this.check = true;
    } else {
      this.router.navigate(['/']);
    }
  }



}
