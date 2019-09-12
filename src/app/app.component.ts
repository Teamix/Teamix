import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private mobileCheckService: MobileCheckService){}

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


  private menuFlag = false;

  public getMenuFlag() {
    return this.menuFlag;
  }

  @HostListener('window:click')
  public menuCloseCheck(){
    let menu = document.querySelector("#nav-icon3");
    if(this.menuClickedFlag){
      menu.classList.remove("open");
      this.menuFlag = false;
      this.menuClickedFlag = false;
    }
    else if(this.menuFlag){
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
