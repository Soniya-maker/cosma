import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public commonService: CommonService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  Onclick(value: string){
    this.router.navigate(['\inquiry-form'])
  }

}
