import { Injectable } from '@angular/core';
import { LanguageService } from './language.service';

const mobileWindowSize = 680;
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
  private enMobileView = '';
  private enDesktopView = '';

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

  public ifMobile()
  // : boolean
  {
    let windowSize = window.innerWidth;
    // need to add all kind of mobiles!
    if (
      // navigator.userAgent.match(/Android/i)
      // || navigator.userAgent.match(/webOS/i)
      // || navigator.userAgent.match(/iPhone/i)
      // || navigator.userAgent.match(/iPad/i)
      // || navigator.userAgent.match(/iPod/i)
      // || navigator.userAgent.match(/BlackBerry/i)
      // || navigator.userAgent.match(/Windows Phone/i)
      // || ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0)
      // || ('msMaxTouchPoints' in navigator && navigator.msMaxTouchPoints > 0)
      // || 'orientation' in window
      (windowSize < this.getMobileWindowSize()
        && windowSize < this.getLandscapeWindowSize())
    ) {
      console.log('true');
      // return true;
      this.mobileFlag = true;
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = "לתצוגת רגיל"
      } else {
        this.changeView = "Desktop View";
      }
      this.changeViewButton = false;
    } else {
      console.log('false');
      // return false;
      this.mobileFlag = false;
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = "לתצוגת מובייל"
      } else {
        this.changeView = "Mobile View"
      }
      this.changeViewButton = true;
    }
  }


  public changeWebsiteView() {
    this.mobileFlag = !this.mobileFlag;
    window.scroll(0, 0);
    if (this.changeView === 'Desktop View' || this.changeView === 'לתצוגת רגיל') {
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = "לתצוגת מובייל"
      } else {
        this.changeView = "Mobile View";
      }
    } else {
      if (this.languageService.getLanguage() === 'Hebrew') {
        this.changeView = "לתצוגת רגיל"
      } else {
        this.changeView = "Desktop View";
      }
    }
  }

  public changeLang() {
    if (this.languageService.getLanguage() === 'Hebrew') {
      if (this.changeView === 'Desktop View') {
        this.changeView = 'לתצוגת רגיל';
      } else {
        this.changeView = 'לתצוגת מובייל';
      }
    } else {
      if (this.changeView === 'לתצוגת רגיל') {
        this.changeView = 'Desktop View';
      } else {
        this.changeView = 'Mobile View';
      }
    }
  }

}
