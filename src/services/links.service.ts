import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  public genreList = [
    'all', 'selected', 'issue', 'latin', 'throwback', 'dance', 'clubbangers'
  ];

  public numOfLinks = this.parseItems();

  public tmp = [];

  constructor(rtdb: AngularFireDatabase, public http: HttpClient) {
    const packs = rtdb.object('firebaseLinks').valueChanges();
    packs.subscribe(
      res => {
        this.numOfLinks = [];
        const check = Object.keys(res);
        for (const item of check) {
          this.numOfLinks.push(res[item]);
        }
        localStorage.setItem('numOfLinks', JSON.stringify(this.numOfLinks));
        if (window.location.href.includes('home')) {
          this.setPacksValue();
        }
      }
    );
  }


  public parseItems() {
    return JSON.parse(localStorage.getItem('numOfLinks'));
  }

  public setPacksValue() {
    if (this.numOfLinks != null && this.numOfLinks.length > 0) {
      this.tmp = [];
      for (let i = 0; i < this.numOfLinks.length && this.tmp.length < 6; i++) {
        if (this.numOfLinks[i].value > 0) {
          this.tmp.push(this.numOfLinks[i]);
        }
      }
      this.tmp.sort((item1, item2) => item1.value - item2.value);
    }
  }

  public setPacksGenre(packsName: string) {
    this.tmp = [];
    if (packsName === 'all') {
      this.tmp = this.numOfLinks;
    } else {
      if (this.numOfLinks.length > 0) {
        for (const item of this.numOfLinks) {
          if (item.genre.includes(packsName)) {
            this.tmp.push(item);
          }
        }
      } else {
        console.log("there has been an error please contact us, " + "error code: " +"5xbr9");
      }
    }
  }

  public getItems() {
    if (this.tmp.length < 1) {
      return this.numOfLinks;
    }
    return this.tmp;
  }

  public checkGenre(genre: string) {
    genre = genre.toLowerCase();
    for (const item of this.genreList) {
      if (item === genre) {
        return true;
      }
    }
    return false;
  }

}
