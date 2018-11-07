import { Component, OnInit } from '@angular/core';
import {MetaDataService} from "../metaData/meta-data.service";

@Component({
  selector: 'app-header-scope',
  templateUrl: './header-scope.component.html',
  styleUrls: ['./header-scope.component.css']
})
export class HeaderScopeComponent implements OnInit {

  constructor(private metaDataService:MetaDataService) {
  }

  ngOnInit() {
  }

  onTogglePanel() {
    this.metaDataService.togglePanel = !this.metaDataService.togglePanel;
  }

}
