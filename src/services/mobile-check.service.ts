import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

const mobileWindowSize = 750;
const landscapeWindowSize = 1000;

@Injectable({
  providedIn: 'root'
})

export class MobileCheckService {

  public getMobileWindowSize() {
    return mobileWindowSize;
  }
  public getLandscapeWindowSize() {
    return landscapeWindowSize;
  }

  // private mobileFlag = this.ifMobile();
  private mobileFlag = false;
  private changeView = "";
  private changeViewButton = false;
  //need to configure the ofiicial words and use only variables
  private hebMobileView = 'לתצוגת מובייל';
  private hebDesktopView = 'לתצוגת מחשב';
  private enMobileView = 'Mobile View';
  private enDesktopView = 'Desktop View';

  public getChangeViewButton() {
    return this.changeViewButton;
  }
  public changeViewButtonOption(ifAble: boolean) {
    this.changeViewButton = ifAble;
  }

  public getChangeView() {
    return this.changeView;
  }

  constructor(public languageService: LanguageService) { this.ifMobile(); }

  public getIfMobile() {
    return this.mobileFlag;
  }

  public ifMobile() {
    const windowSize = window.innerWidth;
    if (
      (windowSize < this.getMobileWindowSize()
        && windowSize < this.getLandscapeWindowSize())
    ) {
      this.mobileFlag = true;
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = this.hebDesktopView;
      } else {
        this.changeView = this.enDesktopView;
      }
      this.changeViewButton = false;
    } else {
      this.mobileFlag = false;
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = this.hebMobileView;
      } else {
        this.changeView = this.enMobileView;
      }
      this.changeViewButton = true;
    }
  }


  public changeWebsiteView() {
    this.mobileFlag = !this.mobileFlag;
    window.scroll(0, 0);
    if (this.changeView === this.enDesktopView || this.changeView === this.hebDesktopView) {
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = this.hebMobileView;
      } else {
        this.changeView = this.enMobileView;
      }
    } else {
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = this.hebDesktopView;
      } else {
        this.changeView = this.enDesktopView;
      }
    }
  }

  public changeLang() {
    if (this.languageService.getLanguage() === 'Hebrew') {
      if (this.changeView === this.enDesktopView) {
        this.changeView = this.hebDesktopView;
      } else {
        this.changeView = this.hebMobileView;
      }
    } else {
      if (this.changeView === this.hebDesktopView) {
        this.changeView = this.enDesktopView;
      } else {
        this.changeView = this.enMobileView;
      }
    }
  }

}
