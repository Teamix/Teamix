import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material";
import { ItemService } from 'src/services/item.service';
import { LinksService } from 'src/services/links.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {


  public packName: string;

  constructor(private itemService: ItemService, public linksService: LinksService, private route: ActivatedRoute) {
    this.packName = route.snapshot.params['packsType'];
  }

  ngOnInit() {
    this.linksService.setPacksName(this.packName);
  }


  public singleItemChoice(item: any) {
    this.itemService.setSingleItem(item);
  }


}
