import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language = localStorage.getItem('language') || 'English';
  private languageOptions = ['Hebrew', 'English'];

  private downloadMessage = "Hi I'm Interested In Package ";
  private englishMessage = "Hi I'm Interested In Package ";
  private hebrewMessage = "היי אני מעוניין בחבילה "

  constructor() { }


  public getLanguage() {
    return this.language;
  }
  public setLanguage(newLanguage: string) {
    if (!(this.language === newLanguage)) {
      for (const item of this.languageOptions) {
        if (item.includes(newLanguage)) {
          localStorage.setItem('language', item);
          this.language = item;
          if(this.language === 'Hebrew'){
            this.downloadMessage = this.hebrewMessage;
          }else{
            this.downloadMessage = this.englishMessage
          }
          return;
        }
      }
    }
  }

  public getLanguageOptions() {
    return this.languageOptions;
  }

  public getDownloadMessage(){
    return this.downloadMessage;
  }

}
