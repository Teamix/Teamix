import { Injectable } from '@angular/core';
import { ItemsPlaylistService } from './items-playlist.service';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  public genreList = [
    'all', 'selected', 'issue', 'latin', 'throwback', 'dance', 'clubbangers'
  ];

  constructor(public itemsPlaylist: ItemsPlaylistService) { }


  public numOfLinks = [
    { packName: 'teamixVol20', img: './assets/teamixVols/teamixVol20.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol20, genre: 'issue', link: '', price: 69.99, value: '3' },
    { packName: 'teamixVol19', img: './assets/teamixVols/teamixVol19.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol19, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PY3QLAQUTDQW8&source=url', price: 49.99, value: '0' },
    { packName: 'teamixVol18', img: './assets/teamixVols/teamixVol18.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol18, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZAC7TUVHTADZ8&source=url', price: 49.99, value: '0' },
    { packName: 'teamixVol17', img: './assets/teamixVols/teamixVol17.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol17, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7YZ33EFJB73JE&source=url', price: 49.99, value: '0' },
    { packName: 'teamixVol16', img: './assets/teamixVols/teamixVol16.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol16, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SY87JFZ7JBM58&source=url', price: 49.99, value: '0' },
    { packName: 'teamixVol15', img: './assets/teamixVols/teamixVol15.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol15, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=JTBDT3UQC47BG&source=url', price: 49.99, value: '0' },
    { packName: 'teamixVol14', img: './assets/teamixVols/teamixVol14.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol14, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TJ5LAV9L728XC&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol13', img: './assets/teamixVols/teamixVol13.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol13, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UXRREL2BF98PA&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol12', img: './assets/teamixVols/teamixVol12.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol12, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=534ZX6953MFP4&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol11', img: './assets/teamixVols/teamixVol11.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol11, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3V2T78M5JAAT8&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol10', img: './assets/teamixVols/teamixVol10.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol10, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LXEFYA6EPBMPL&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol9', img: './assets/teamixVols/teamixVol9.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol9, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=8EZMXLVGW5EA2&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol8', img: './assets/teamixVols/teamixVol8.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol8, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FTQCBYDT72VXG&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol7', img: './assets/teamixVols/teamixVol7.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol7, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U6LJRMVCAYEKN&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol6', img: './assets/teamixVols/teamixVol6.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol6, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=LUVG3MEBCNMR2&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol5', img: './assets/teamixVols/teamixVol5.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol5, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G6W9Q8FKHC94L&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol4', img: './assets/teamixVols/teamixVol4.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol4, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7D65HFMSWZ5PL&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol3', img: './assets/teamixVols/teamixVol3.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol3, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=WDLGVDM3WFAUY&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol2', img: './assets/teamixVols/teamixVol2.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol2, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Q39CXBH33YBKY&source=url', price: 29.99, value: '0' },
    { packName: 'teamixVol1', img: './assets/teamixVols/teamixVol1.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixVol1, genre: 'issue', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=UH47PQDFNRARN&source=url', price: 29.99, value: '0' },
    { packName: 'teamixClubBangersVol1', img: './assets/clubbangersVols/teamixClubBangersVol1.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixClubBangersVol1, genre: 'clubbangers', link: '', price: 29.99, value: '2' },
    { packName: 'teamixSelectedVol8', img: './assets/selectedVols/teamixSelectedVol8.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol8, genre: 'selected', link: '', price: 24.99, value: '1' },
    { packName: 'teamixSelectedVol7', img: './assets/selectedVols/teamixSelectedVol7.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol7, genre: 'selected', link: '', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol6', img: './assets/selectedVols/teamixSelectedVol6.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol6, genre: 'selected', link: '', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol5', img: './assets/selectedVols/teamixSelectedVol5.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol5, genre: 'selected', link: '', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol4', img: './assets/selectedVols/teamixSelectedVol4.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol4, genre: 'selected', link: '', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol3', img: './assets/selectedVols/teamixSelectedVol3.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol3, genre: 'selected', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PXDTXGGDSHNES&source=url', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol2', img: './assets/selectedVols/teamixSelectedVol2.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol2, genre: 'selected', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=N8QUV4C5LXXCS&source=url', price: 24.99, value: '0' },
    { packName: 'teamixSelectedVol1', img: './assets/selectedVols/teamixSelectedVol1.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixSelectedVol1, genre: 'selected', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=MJQJDR73W28FG&source=url', price: 24.99, value: '0' },
    { packName: 'teamixLatinVol6', img: './assets/latinVols/teamixLatinVol6.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol6, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=6J2VD5577LDTY&source=url', price: 29.99, value: '5' },
    { packName: 'teamixLatinVol5', img: './assets/latinVols/teamixLatinVol5.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol5, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DE283BW6EWHW4&source=url', price: 29.99, value: '0' },
    { packName: 'teamixLatinVol4', img: './assets/latinVols/teamixLatinVol4.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol4, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=D72AVC6LCDF2L&source=url', price: 29.99, value: '0' },
    { packName: 'teamixLatinVol3', img: './assets/latinVols/teamixLatinVol3.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol3, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AXFC3CJTXAF9Y&source=url', price: 29.99, value: '0' },
    { packName: 'teamixLatinVol2', img: './assets/latinVols/teamixLatinVol2.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol2, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=9JV45MAJ4QG3J&source=url', price: 29.99, value: '0' },
    { packName: 'teamixLatinVol1', img: './assets/latinVols/teamixLatinVol1.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixLatinVol1, genre: 'latin', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G258XDB9VP4EE&source=url', price: 29.99, value: '0' },
    { packName: 'teamixThrowbackVol8', img: './assets/throwbackVols/teamixThrowbackVol8.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol8, genre: 'throwback', link: '', price: 24.99, value: '4' },
    { packName: 'teamixThrowbackVol7', img: './assets/throwbackVols/teamixThrowbackVol7.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol7, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=PVKJPPKV7VTWA&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol6', img: './assets/throwbackVols/teamixThrowbackVol6.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol6, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=TJ35EG2TFT6EY&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol5', img: './assets/throwbackVols/teamixThrowbackVol5.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol5, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RCNHGSZ2752H8&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol4', img: './assets/throwbackVols/teamixThrowbackVol4.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol4, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=66WP5BLC8Y438&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol3', img: './assets/throwbackVols/teamixThrowbackVol3.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol3, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FWQ8MB54H3HC2&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol2', img: './assets/throwbackVols/teamixThrowbackVol2.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol2, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ATPJ64JT4XV3U&source=url', price: 24.99, value: '0' },
    { packName: 'teamixThrowbackVol1', img: './assets/throwbackVols/teamixThrowbackVol1.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixThrowbackVol1, genre: 'throwback', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RFLAJQ46PA7Q8&source=url', price: 24.99, value: '0' },
    { packName: 'teamixDanceVol10', img: './assets/danceVols/teamixDanceVol10.jpeg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol10, genre: 'dance', link: '', price: 29.99, value: '6' },
    { packName: 'teamixDanceVol9', img: './assets/danceVols/teamixDanceVol9.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol9, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=69TXCEXTH68AE&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol8', img: './assets/danceVols/teamixDanceVol8.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol8, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=AEK27CKWFEBPY&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol7', img: './assets/danceVols/teamixDanceVol7.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol7, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=T5Z3RDM74BWNA&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol6', img: './assets/danceVols/teamixDanceVol6.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol6, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=3S8CFA82W66RN&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol5', img: './assets/danceVols/teamixDanceVol5.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol5, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=VX8SFFJTYJUGY&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol4', img: './assets/danceVols/teamixDanceVol4.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol4, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Z6CQZXPP8HK9U&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol3', img: './assets/danceVols/teamixDanceVol3.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol3, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SUJLJPDDNHQT8&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol2', img: './assets/danceVols/teamixDanceVol2.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol2, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FZPY75HDWRB8L&source=url', price: 29.99, value: '0' },
    { packName: 'teamixDanceVol1', img: './assets/danceVols/teamixDanceVol1.jpg', playlist: this.itemsPlaylist.getItemsPlaylist().teamixDanceVol1, genre: 'dance', link: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=U2HQ5S5NWH53W&source=url', price: 29.99, value: '0' },
  ];

  public tmp = [];

  public setPacksValue() {
    this.tmp = [];
    for (let i = 0; i < this.numOfLinks.length && this.tmp.length < 6; i++) {
      if (+this.numOfLinks[i].value > 0) {
        this.tmp.push(this.numOfLinks[i]);
      }
    }
    this.tmp.sort((item1, item2) => item1.value - item2.value);
  }

  public setPacksGenre(packsName: string) {
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
