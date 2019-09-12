import { Injectable } from '@angular/core';
import { ItemsPlaylistService } from './items-playlist.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {


  constructor(public itemsPlaylist: ItemsPlaylistService) { }


  public numOfLinks = [
    { packName: "teamixVol19", img: "./assets/teamixVols/teamixVol19.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol19, genre: "main", value: '1' },
    { packName: "teamixVol18", img: "./assets/teamixVols/teamixVol18.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol18, genre: "main", value: '1' },
    { packName: "teamixVol17", img: "./assets/teamixVols/teamixVol17.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol17, genre: "main", value: '1' },
    { packName: "teamixVol16", img: "./assets/teamixVols/teamixVol16.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol16, genre: "main", value: '1' },
    { packName: "teamixVol15", img: "./assets/teamixVols/teamixVol15.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol15, genre: "main", value: '1' },
    { packName: "teamixVol14", img: "./assets/teamixVols/teamixVol14.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol14, genre: "main", value: '0' },
    { packName: "teamixVol13", img: "./assets/teamixVols/teamixVol13.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol13, genre: "main", value: '0' },
    { packName: "teamixVol12", img: "./assets/teamixVols/teamixVol12.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol12, genre: "main", value: '0' },
    { packName: "teamixVol11", img: "./assets/teamixVols/teamixVol11.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol11, genre: "main", value: '0' },
    { packName: "teamixVol10", img: "./assets/teamixVols/teamixVol10.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol10, genre: "main", value: '0' },
    { packName: "teamixVol9", img: "./assets/teamixVols/teamixVol9.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol9, genre: "main", value: '0' },
    { packName: "teamixVol8", img: "./assets/teamixVols/teamixVol8.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol8, genre: "main", value: '0' },
    { packName: "teamixVol7", img: "./assets/teamixVols/teamixVol7.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol7, genre: "main", value: '0' },
    { packName: "teamixVol6", img: "./assets/teamixVols/teamixVol6.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol6, genre: "main", value: '0' },
    { packName: "teamixVol5", img: "./assets/teamixVols/teamixVol5.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol5, genre: "main", value: '0' },
    { packName: "teamixVol4", img: "./assets/teamixVols/teamixVol4.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol4, genre: "main", value: '0' },
    { packName: "teamixVol3", img: "./assets/teamixVols/teamixVol3.jpeg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol3, genre: "main", value: '0' },
    { packName: "teamixVol2", img: "./assets/teamixVols/teamixVol2.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol2, genre: "main", value: '0' },
    { packName: "teamixVol1", img: "./assets/teamixVols/teamixVol1.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol1, genre: "main", value: '0' },
    { packName: "teamixLatinVol1", img: "./assets/latinVols/teamixLatinVol1.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol1, genre: "latin", value: '0' },
    { packName: "teamixLatinVol2", img: "./assets/latinVols/teamixLatinVol2.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol2, genre: "latin", value: '0' },
    { packName: "teamixLatinVol3", img: "./assets/latinVols/teamixLatinVol3.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol3, genre: "latin", value: '0' },
    { packName: "teamixLatinVol4", img: "./assets/latinVols/teamixLatinVol4.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol4, genre: "latin", value: '0' },
    { packName: "teamixLatinVol5", img: "./assets/latinVols/teamixLatinVol5.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol5, genre: "latin", value: '0' },
    { packName: "teamixThrowbackVol1", img: "./assets/throwbackVols/teamixThrowbackVol1.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol1, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol2", img: "./assets/throwbackVols/teamixThrowbackVol2.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol2, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol3", img: "./assets/throwbackVols/teamixThrowbackVol3.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol3, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol4", img: "./assets/throwbackVols/teamixThrowbackVol4.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol4, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol5", img: "./assets/throwbackVols/teamixThrowbackVol5.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol5, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol6", img: "./assets/throwbackVols/teamixThrowbackVol6.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol6, genre: "throwback", value: '0' },
    { packName: "teamixThrowbackVol7", img: "./assets/throwbackVols/teamixThrowbackVol7.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol7, genre: "throwback", value: '0' },
    { packName: "teamixDanceVol1", img: "./assets/danceVols/teamixDanceVol1.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol1, genre: "dance", value: '0' },
    { packName: "teamixDanceVol2", img: "./assets/danceVols/teamixDanceVol2.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol2, genre: "dance", value: '0' },
    { packName: "teamixDanceVol3", img: "./assets/danceVols/teamixDanceVol3.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol3, genre: "dance", value: '0' },
    { packName: "teamixDanceVol4", img: "./assets/danceVols/teamixDanceVol4.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol4, genre: "dance", value: '0' },
    { packName: "teamixDanceVol5", img: "./assets/danceVols/teamixDanceVol5.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol5, genre: "dance", value: '0' },
    { packName: "teamixDanceVol6", img: "./assets/danceVols/teamixDanceVol6.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol6, genre: "dance", value: '0' },
    { packName: "teamixDanceVol7", img: "./assets/danceVols/teamixDanceVol7.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol7, genre: "dance", value: '0' },
    { packName: "teamixDanceVol8", img: "./assets/danceVols/teamixDanceVol8.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol8, genre: "dance", value: '0' },
    { packName: "teamixDanceVol9", img: "./assets/danceVols/teamixDanceVol9.jpg", playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol9, genre: "dance", value: '0' },
  ];

  public tmp = [];

  public setPacksValue(){
    this.tmp = [];
    for(let i = 0; i < this.numOfLinks.length && this.tmp.length < 5; i++){
      if(this.numOfLinks[i].value.includes('1')){
        this.tmp.push(this.numOfLinks[i]);
      }
    }
  }

  public setPacksName(packsName: string) {
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
    if(this.tmp.length < 1)
    {
      return this.numOfLinks;
    }
    return this.tmp;
  }

}
