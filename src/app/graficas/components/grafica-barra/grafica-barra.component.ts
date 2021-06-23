import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal:boolean= false;

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
 @Input() barChartLabels: Label[] = [
  //  '2010', '2011', '2012', '2013', '2014', '2015', '2016'
  ];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input() barChartData: ChartDataSets[] = [
    // { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#8553EA', hoverBackgroundColor: 'red', },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#4A92F7', hoverBackgroundColor: 'grey', },
    // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series C', backgroundColor: '#FA89E6', hoverBackgroundColor: 'black', } 
  ];


  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartType= 'horizontalBar'
    }

  }

}
