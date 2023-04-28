import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  OnclickLogout(){
    this.commonService.loginStatus = false;
  }

}
