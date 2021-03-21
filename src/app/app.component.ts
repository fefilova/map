import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import MapConfig from './MapConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  armalit_img
  askold_img
  burevestnik_img
  skbk_img
  constructor(private httpClient: HttpClient) {
    this.get.subscribe((x: MapConfig) => {
      this.armalit_img = x.sities.armalit.img_01;
      this.askold_img = x.sities.askold;
      this.burevestnik_img = x.sities.burevestnik;
      this.skbk_img = x.sities.skbk;
    })
  }


  get = this.httpClient.get<MapConfig>('sities.json')
}
