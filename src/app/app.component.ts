import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';
import { LinksService } from 'src/services/links.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public creators = 'YL Program and Web, MH Design, Teamix';

  items: Observable<any>;


  constructor(public mobileCheckService: MobileCheckService, private linksService: LinksService, public languageService: LanguageService, private router: Router) {
    localStorage.setItem('choice', 'All');
  }

  private title = 'TeamixSite';
  public ionScroll;
  public buttonFlag = false;
  public menuClickedFlag = false;

  public scrollUpNow() {
    window.scroll(0, 0);
    this.buttonFlag = false;
  }

  @HostListener('window:scroll')
  public checkFlag() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      this.buttonFlag = true;
    } else {
      this.buttonFlag = false;
    }
  }

  @HostListener('window:resize')
  public resizewibdow() {
    if (window.innerWidth < this.mobileCheckService.getMobileWindowSize()) {
      this.mobileCheckService.ifMobile();
    } else if (window.innerWidth > this.mobileCheckService.getMobileWindowSize() + 1 && window.innerWidth < this.mobileCheckService.getLandscapeWindowSize()) {
      this.mobileCheckService.changeViewButtonOption(true);
    } else {
      this.mobileCheckService.ifMobile();
    }
  }


  private menuFlag = false;

  public getMenuFlag() {
    return this.menuFlag;
  }

  @HostListener('window:click')
  public menuCloseCheck() {
    let menu = document.querySelector("#nav-icon3");
    if (this.menuClickedFlag) {
      if (menu != null) {
        menu.classList.remove("open");
      }
      this.menuFlag = false;
      this.menuClickedFlag = false;
    }
    else if (this.menuFlag) {
      this.menuClickedFlag = true;
    }
  }

  public menuClick() {
    let menu = document.querySelector("#nav-icon3");
    if (this.menuFlag === false) {
      menu.classList.add("open");
      this.menuFlag = true;
    }
    else {
      menu.classList.remove("open");
      this.menuFlag = false;
      this.menuClickedFlag = true;
    }
  }


}
