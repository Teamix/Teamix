import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material";
import { ItemService } from 'src/services/item.service';
import { LinksService } from 'src/services/links.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private itemService: ItemService, public linksService: LinksService) { }

  ngOnInit() {
  }  


  public singleItemChoice(item: any) {
    this.itemService.setSingleItem(item);
  }


}
