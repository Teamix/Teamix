import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinksService {

  constructor() { }


  private teamixVol19 = "Exclusive :"
    + "\nArthur Project - Akabee [Original Mix]"
    + "\nArthur Project - Akabee [Radio Mix] Arthur Project - Akabee [Radio Vocal Mix]"
    + "\nArthur Project - Akabee [Vocal Mix] Arthur Project - Touch and press Play (Extended Version)"
    + "\nArthur Project - Touch and press Play Denis First & Reznikov & Bright Sparks - Shameless(Mike Tsoff & German Avny Remix)"
    + "\nFetty Wap ft Nicki Minaj - Like A Star(RooBen Remix)"
    + "\nJax Jones, Martin Solveig, Madison Beer - All Day And Night(German Avny & Mike Tsoff Remix)"
    + "\nMahmood - Soldi(Aviel Mymon Transition) 100 - 128"
    + "\nNetta X Bad Bunny, Ozuna, Nicky Jam - BassaBote(Aviel Mymon Edit) V2";

  public numOfLinks = [{ packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },  { packName: "teamixVol19", img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }];


  public getItems() {
    return this.numOfLinks;
  }

}
