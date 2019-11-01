import { Component, OnInit, NgModule, HostListener } from '@angular/core';
import { MatCardModule } from "@angular/material";
import { ItemService } from 'src/services/item.service';
import { LinksService } from 'src/services/links.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MobileCheckService } from 'src/services/mobile-check.service';


@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent implements OnInit {


  public packGenre: string;
  public choice = "All";
  public list;
  public tmp;

  constructor(private itemService: ItemService, public linksService: LinksService, private route: ActivatedRoute, private router: Router, public mobileCheckService: MobileCheckService) {
    this.packGenre = this.route.snapshot.params['packsType'];
  }

  ngOnInit() {
    if (this.linksService.checkGenre(this.packGenre)) {
      this.packGenre = this.packGenre.toLowerCase();
      if (!(this.packGenre === localStorage.getItem('choice'))) {

        const tempChoice = this.packGenre.charAt(0).toUpperCase() + this.packGenre.substring(1);
        localStorage.setItem('choice', tempChoice);
        this.choice = tempChoice;
      }
      this.linksService.setPacksGenre(this.packGenre);
      this.list = this.linksService.getItems();
      this.tmp = this.list;
      const selection: any = document.querySelector('#genreSelect');
      selection.value = this.choice;
    } else {
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    localStorage.removeItem('choice');
  }

  @HostListener('window:popstate')
  public change() {
    let urlpath: string = document.location.pathname
    let choice = urlpath.charAt(7).toUpperCase() + urlpath.substring(8);
    const selection: any = document.querySelector('#genreSelect');

    if (selection.value !== choice) {
      this.genreChoice(choice, selection);
    } else {
      window.history.back();
    }
  }


  public singleItemChoice(item: any) {
    this.itemService.setSingleItem(item);
  }

  public genreChoice(newChoice: string, selection) {
    localStorage.setItem('choice', newChoice);
    newChoice = newChoice.toLowerCase();
    this.packGenre = newChoice;
    this.router.navigate(['/packs/' + newChoice]);
    //this.linksService.setPacksGenre(this.packName);
    this.tmp = this.linksService.getItems();
    this.ngOnInit();
  }

  public searchItem(itemName: string) {
    itemName = itemName.toLowerCase();
    this.tmp = [];
    for (const item of this.list) {
      if (item.playlist.toLowerCase().includes(itemName) || item.packName.toLowerCase().includes(itemName)) {
        this.tmp.push(item);
      }
    }
  }





}
