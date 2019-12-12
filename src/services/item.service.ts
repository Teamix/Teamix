import { Injectable } from '@angular/core';
import { LinksService } from './links.service';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private linksService: LinksService) { }

  // private singleItem: any;
  // private items: any;

  // public getSingleItem() {
  //   return this.linksService.getSingleItem();
  // }
  // public setSingleItem(itemName) {
  //   this.linksService.setSingleItem(itemName);
  // }

  // public setSingleItem(itemName:string){
  //   this.items = this.linksService.getItems();
  //   for(let i = 0; i < this.items.length; i++){
  //     if(this.items[i].packName === itemName){
  //       this.singleItem = this.items[i];
  //     }
  //   }
  // }

}
