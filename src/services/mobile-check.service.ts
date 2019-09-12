import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MobileCheckService {

  // private mobileFlag = this.ifMobile();
  private mobileFlag = false;
  private changeView = "";

  public getChangeView(){
    return this.changeView;
  }

  constructor() { this.ifMobile(); }

  public getIfMobile() {
    return this.mobileFlag;
  }

  public ifMobile()
  // : boolean
  {
    // need to add all kind of mobiles!
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ) {
      console.log('true');
      // return true;
      this.mobileFlag = true;
      this.changeView = "Desktop View";
    }
    console.log('false');
    // return false;
    this.mobileFlag = false;
    this.changeView = "Mobile View"
  }

  public changeWebsiteView(){
    this.mobileFlag = !this.mobileFlag;
    window.scroll(0, 0);
    if(this.changeView === 'Desktop View'){
      this.changeView = "Mobile View";
    }else{
      this.changeView = "Desktop View";
    }
  }

}
