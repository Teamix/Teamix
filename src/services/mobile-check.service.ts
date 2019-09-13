import { Injectable } from '@angular/core';

const mobileWindowSize = 700;
const landscapeWindowSize = 900;

@Injectable({
  providedIn: 'root'
})

export class MobileCheckService {

public getMobileWindowSize(){
  return mobileWindowSize;
}
public getLandscapeWindowSize(){
  return landscapeWindowSize;
}

  // private mobileFlag = this.ifMobile();
  private mobileFlag = false;
  private changeView = "";
  private changeViewButton = false;

  public getChangeViewButton(){
    return this.changeViewButton;
  }
  public changeViewButtonOption(ifAble: boolean){
    this.changeViewButton = ifAble;
  }

  public getChangeView() {
    return this.changeView;
  }

  constructor() { this.ifMobile(); }

  public getIfMobile() {
    return this.mobileFlag;
  }

  public ifMobile()
  // : boolean
  {
    let windowSize = window.innerWidth;
    // need to add all kind of mobiles!
    if (navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)
      || ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 0)
      || ('msMaxTouchPoints' in navigator && navigator.msMaxTouchPoints > 0)
      || 'orientation' in window
      || (windowSize < this.getMobileWindowSize()
      && windowSize < this.getLandscapeWindowSize())
    ) {
      console.log('true');
      // return true;
      this.mobileFlag = true;
      this.changeView = "Desktop View";
      this.changeViewButton = false;
    } else {
      console.log('false');
      // return false;
      this.mobileFlag = false;
      this.changeView = "Mobile View"
      this.changeViewButton = true;
    }
  }


  public changeWebsiteView() {
    this.mobileFlag = !this.mobileFlag;
    window.scroll(0, 0);
    if (this.changeView === 'Desktop View') {
      this.changeView = "Mobile View";
    } else {
      this.changeView = "Desktop View";
    }
  }

}
