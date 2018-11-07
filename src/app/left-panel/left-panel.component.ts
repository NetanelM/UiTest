import { Component, OnInit } from '@angular/core';
import {MetaDataService} from "../metaData/meta-data.service";
import { Router } from '@angular/router';
@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css']
})
export class LeftPanelComponent implements OnInit {

  constructor(private metaDataService:MetaDataService,private router: Router) {

  }

  ngOnInit() {
  }

  onSelected(item) {

    this.metaDataService.pagesPath.forEach(i=> {
      i['select'] = false;
    });
    item.select = true;
  }

}
