import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packs-menu',
  templateUrl: './packs-menu.component.html',
  styleUrls: ['./packs-menu.component.scss']
})
export class PacksMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private packs = [{packName: "all", img: "./assets/logos/OG-LOGO.jpg"},
  { packName: "main", img: "./assets/packsLogos/main.jpg" },
  { packName: "latin", img: "./assets/packsLogos/latin.jpg" },
  { packName: "throwBack", img: "./assets/packsLogos/throwBack.jpg" },
  { packName: "dance", img: "./assets/packsLogos/dance.jpg" }];

  public getPacks() {
    return this.packs;
  }


}
