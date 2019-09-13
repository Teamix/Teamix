import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons-tab',
  templateUrl: './icons-tab.component.html',
  styleUrls: ['./icons-tab.component.scss']
})
export class IconsTabComponent implements OnInit {

  public icons = [
    { iconImage: './assets/mediaIcons/paypalIcon.png', iconLink: 'youtube.com' },
    { iconImage: './assets/mediaIcons/instagramIcon.png', iconLink: 'https://www.youtube.com' },
    { iconImage: './assets/mediaIcons/linkdinIcon.png', iconLink: 'https://www.youtube.com' },
    { iconImage: './assets/mediaIcons/soundcloudIcon.png', iconLink: 'https://www.youtube.com' },
    { iconImage: './assets/mediaIcons/facebookIcon.png', iconLink: 'https://www.youtube.com' },
    { iconImage: './assets/mediaIcons/whatsappIcon.png', iconLink: 'https://www.youtube.com' },
    { iconImage: './assets/mediaIcons/youtubeIcon.png', iconLink: 'https://www.youtube.com' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
