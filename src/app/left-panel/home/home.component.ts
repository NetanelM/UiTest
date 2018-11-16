import { Component, OnInit } from '@angular/core';
import {MetaDataService} from "../../metaData/meta-data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private listNames:Array<string> = [];
  private listCharts:Array<any> = [];

  constructor(private metaDataService:MetaDataService) {
    this.listNames = ['Tasks', 'Messages', 'Activity'];
    this.listCharts = [{name: 'Your Sales', img: 'circleGraph.PNG'}, {name: 'Report', img: 'graph.PNG'}]
  }

  ngOnInit() {
  }


}
