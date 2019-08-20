import { Injectable } from '@angular/core';
import { ItemsPlaylistService } from './items-playlist.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor(public itemsPlaylist: ItemsPlaylistService) { }

  private teamixVol19 = "";

  public numOfLinks = [{ packName: "teamixVol18", img: "./assets/teamixVol18.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol18 }, { packName: "teamixVol17", img: "./assets/teamixVol17.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol17 }, { packName: "teamixVol16", img: "./assets/teamixVol16.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol16 },
  { packName: "teamixVol15", img: "./assets/teamixVol15.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol15 }];


  public getItems() {
    return this.numOfLinks;
  }

}
