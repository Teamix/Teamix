import { Component, OnInit } from '@angular/core';
import { ItemService } from 'src/services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-layout',
  templateUrl: './item-layout.component.html',
  styleUrls: ['./item-layout.component.scss']
})
export class ItemLayoutComponent implements OnInit {

  public check = false;
  public itemName:string;
  public item:any;

  constructor(private itemService: ItemService, private route: ActivatedRoute) {
    this.itemName = route.snapshot.params['package'];
   }

  ngOnInit() {
    this.itemService.setSingleItem(this.itemName); 
    if(this.item != null || this.itemService.getSingleItem != null){
      this.check = true;
    }
  }



}
