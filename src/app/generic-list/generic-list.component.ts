import { Component, OnInit, Input } from '@angular/core';
import {MetaDataService} from "../metaData/meta-data.service";

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})


export class GenericListComponent implements OnInit {
  @Input() name:string;

  constructor(private metaDataService :MetaDataService) {
  }

  ngOnInit() {
  }

}
