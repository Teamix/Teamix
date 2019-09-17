import { Component, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';

@Component({
  selector: 'app-icons-tab',
  templateUrl: './icons-tab.component.html',
  styleUrls: ['./icons-tab.component.scss']
})
export class IconsTabComponent implements OnInit {


  public icons = [
    { iconImage: './assets/mediaIcons/facebookIcon.png', iconLink: 'https://www.facebook.com/TeaMixx/' },
    { iconImage: './assets/mediaIcons/instagramIcon.png', iconLink: 'https://www.instagram.com/teamix_il/' },
    { iconImage: './assets/mediaIcons/whatsappIcon.png', iconLink: 'https://wa.me/972515144104' },
    { iconImage: './assets/mediaIcons/soundcloudIcon.png', iconLink: 'https://soundcloud.com/teamix_il' },
    { iconImage: './assets/mediaIcons/youtubeIcon.png', iconLink: 'https://www.youtube.com/channel/UCzOjI05HsHShRCM8Gq-MKSg' },
    { iconImage: './assets/mediaIcons/paypalIcon.png', iconLink: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=W2FYLU6QAXP8Q&source=url' },
    // { iconImage: './assets/mediaIcons/linkdinIcon.png', iconLink: '' }
  ];

  constructor(public mobileCheckService: MobileCheckService) { }

  ngOnInit() {
  }

}
