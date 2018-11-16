import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  @Input() headerName:string;
  @Input() chartImg:string;

  constructor() {
  }

  ngOnInit() {
  }

}
