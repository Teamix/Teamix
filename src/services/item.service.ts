import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  private singleItem: any;

  public getSingleItem(){
    return this.singleItem;
  }
  public setSingleItem(item: any){
    this.singleItem = item;
  }

}
