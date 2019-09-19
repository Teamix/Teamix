import { Component, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';
import { LanguageService } from 'src/services/language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public messageHeb = 'נשמח לעמוד לשירותכם בכל שאלה ובקשה 24/7';
  public messageEn = 'We Will Be Happy To Assist You With\n Any Questions And Requests 24/7';

  public email = 'teamix.service@gmail.com';
  public phoneHeb = '0515144104';
  public phoneEn = '+972515144104';
  public whatsappHeb = '0515144104';
  public whatsappEn = '+972515144104';

  public contactUsHeb = ' : צור קשר';
  public contactUsEn = 'Contact Us :';

  public emailTextHeb = ' : אימייל';
  public emailTextEn = 'Email : ';
  public phoneTextHeb = ' : טלפון';
  public phoneTextEn = 'Phone : ';
  public whatsappTextHeb = ' : וואטסאפ';
  public whatsappTextEn = 'WhatsApp : ';



  constructor(public mobileCheckService: MobileCheckService, public languageService: LanguageService) { }

  ngOnInit() {
  }

}
