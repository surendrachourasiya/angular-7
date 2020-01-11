import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';
import { Trade } from '../shared/model.trades';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  trades: Trade[] = [];

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getData();
  }

  // Get trade data
  getData() {
    let url = 'https://testwallet.angelium.net/api/exchange/trades/';

    this.api.getApiData(url).subscribe(response => {
      if(response['status']===true) {
        this.trades = response['data']['trades']
      }
    });
  }

}
