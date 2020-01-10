import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trades = [];

  constructor(private router: Router, private api: ApiService,) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    
    let url = 'https://testwallet.angelium.net/api/exchange/trades/';

    this.api.getApiData(url).subscribe(response => {
      if(response['status']===true) {
        this.trades = response['data']['trades']
      }
    });
  } 

  logout(){
    localStorage.removeItem('TOKEN');
    this.router.navigateByUrl('/login');
  }

}
