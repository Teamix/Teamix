import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private language = 'English';
  private languageOptions = ['Hebrew', 'English'];

  constructor() { }


  public getLanguage() {
    return this.language;
  }
  public setLanguage(newLanguage: string) {
    if (!(this.language === newLanguage)) {
      for (const item of this.languageOptions) {
        if (item.includes(newLanguage)) {
          this.language = item;
          return;
        }
      }
    }
  }

  public getLanguageOptions() {
    return this.languageOptions;
  }



}
