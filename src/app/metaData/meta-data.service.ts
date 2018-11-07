import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  public pagesPath = [];
  public imgPath = 'assets/img/';

  public data:any = {};
  public togglePanel:boolean = true;
  public url:string = './assets/data.json';

  constructor(private http:HttpClient) {

    this.getData().subscribe(data=> {
      this.data = data;
    });

    this.pagesPath = [
      {page: 'Home', select: true},
      {page: 'Workflow', select: false},
      {page: 'Statistics', select: false},
      {page: 'Calendar', select: false},
      {page: 'Users', select: false},
      {page: 'Settings', select: false}];
  }

  getData() {
    return this.http.get(this.url);
  }

}
