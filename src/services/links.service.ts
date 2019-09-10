import { Injectable } from '@angular/core';
import { ItemsPlaylistService } from './items-playlist.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  constructor(public itemsPlaylist: ItemsPlaylistService) { }


  public numOfLinks = [
    { packName: "teamixVol19", img: "./assets/teamixVols/teamixVol19.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol19, genre: "main" },
    { packName: "teamixVol18", img: "./assets/teamixVols/teamixVol18.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol18, genre: "main" },
    { packName: "teamixVol17", img: "./assets/teamixVols/teamixVol17.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol17, genre: "main" },
    { packName: "teamixVol16", img: "./assets/teamixVols/teamixVol16.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol16, genre: "main" },
    { packName: "teamixVol15", img: "./assets/teamixVols/teamixVol15.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol15, genre: "main" },
    { packName: "teamixVol14", img: "./assets/teamixVols/teamixVol14.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol14, genre: "main" },
    { packName: "teamixVol13", img: "./assets/teamixVols/teamixVol13.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol13, genre: "main" },
    { packName: "teamixVol12", img: "./assets/teamixVols/teamixVol12.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol12, genre: "main" },
    { packName: "teamixVol11", img: "./assets/teamixVols/teamixVol11.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol11, genre: "main" },
    { packName: "teamixVol10", img: "./assets/teamixVols/teamixVol10.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol10, genre: "main" },
    { packName: "teamixVol9", img: "./assets/teamixVols/teamixVol9.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol9, genre: "main" },
    { packName: "teamixVol8", img: "./assets/teamixVols/teamixVol8.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol8, genre: "main" },
    { packName: "teamixVol7", img: "./assets/teamixVols/teamixVol7.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol7, genre: "main" },
    { packName: "teamixVol6", img: "./assets/teamixVols/teamixVol6.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol6, genre: "main" },
    { packName: "teamixVol5", img: "./assets/teamixVols/teamixVol5.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol5, genre: "main" },
    { packName: "teamixVol4", img: "./assets/teamixVols/teamixVol4.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol4, genre: "main" },
    { packName: "teamixVol3", img: "./assets/teamixVols/teamixVol3.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol3, genre: "main" },
    { packName: "teamixVol2", img: "./assets/teamixVols/teamixVol2.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol2, genre: "main" },
    { packName: "teamixVol1", img: "./assets/teamixVols/teamixVol1.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol1, genre: "main" },
  ];

  public tmp = [];


  private setPacksName(packsName: string) {
    this.tmp = [];
    if (packsName === 'all') {
      this.tmp = this.numOfLinks;
    }
    else {
      for (let i = 0; i < this.numOfLinks.length; i++) {
        if (this.numOfLinks[i].genre.includes(packsName)) {
          this.tmp.push(this.numOfLinks[i]);
        }
      }
    }
  }

  public getItems() {
    return this.tmp;
  }

}
