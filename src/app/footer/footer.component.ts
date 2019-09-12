import { Component, OnInit } from '@angular/core';
import { MobileCheckService } from 'src/services/mobile-check.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private mobileCheckService: MobileCheckService) { }

  ngOnInit() {
  }

  public changeMyView(){
    this.mobileCheckService.changeWebsiteView();
  }

}
