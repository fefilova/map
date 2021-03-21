
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import IArrayImg from './IArrayImg';
import MapConfig from './MapConfig';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // armalit_img: IArrayImg[]  = [
  //   {src: "armalit_img_01"},
  //   {src: "armalit_img_02"},
  //   {src: "armalit_img_03"},
  //   {src: "armalit_img_04"},
  //   {src: "armalit_img_05"},
  // ]
  armalit_img: IArrayImg[] = [
    { src: 'this.armalit_img_01' },
    { src: '/assets/sities/armalit/02.png' }
  ];

  armalit_img_01
  armalit_img_02
  armalit_img_03
  armalit_img_04
  armalit_img_05

  askold_img
  burevestnik_img
  skbk_img
  constructor(private httpClient: HttpClient) {
    this.get.subscribe((x: MapConfig) => {
      this.armalit_img_01 = x.sities.armalit.img_01;
      this.armalit_img_02 = x.sities.armalit.img_02;
      this.armalit_img_03 = x.sities.armalit.img_03;
      this.armalit_img_04 = x.sities.armalit.img_04;
      this.armalit_img_05 = x.sities.armalit.img_05;

      this.askold_img = x.sities.askold;
      this.burevestnik_img = x.sities.burevestnik;
      this.skbk_img = x.sities.skbk;
    })
  }


  get = this.httpClient.get<MapConfig>('sities.json')
}
