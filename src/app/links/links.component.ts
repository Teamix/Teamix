import { Component, OnInit, NgModule } from '@angular/core';
import { MatCardModule } from "@angular/material";
import { ItemService } from 'src/services/item.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }


  private teamixVol19 = "Exclusive :"
    + "\nArthur Project - Akabee [Original Mix]"
    + "\nArthur Project - Akabee [Radio Mix] Arthur Project - Akabee [Radio Vocal Mix]"
    + "\nArthur Project - Akabee [Vocal Mix] Arthur Project - Touch and press Play (Extended Version)"
    + "\nArthur Project - Touch and press Play Denis First & Reznikov & Bright Sparks - Shameless(Mike Tsoff & German Avny Remix)"
    + "\nFetty Wap ft Nicki Minaj - Like A Star(RooBen Remix)"
    + "\nJax Jones, Martin Solveig, Madison Beer - All Day And Night(German Avny & Mike Tsoff Remix)"
    + "\nMahmood - Soldi(Aviel Mymon Transition) 100 - 128"
    + "\nNetta X Bad Bunny, Ozuna, Nicky Jam - BassaBote(Aviel Mymon Edit) V2"

  public numOfLinks = [{ img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 },
  { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }, { img: "./assets/teamixVol19.jpg", playlist: this.teamixVol19 }]


  public singleItemChoice(item: any) {
    this.itemService.setSingleItem(item);
  }


}
