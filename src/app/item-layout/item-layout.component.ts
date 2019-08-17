import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/item.service';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.scss']
})
export class ItemLayoutComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    if(this.itemService.getSingleItem() != null){
      this.check = true;
    }
  }


  private check = false;

}
