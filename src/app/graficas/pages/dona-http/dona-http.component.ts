import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {
 
   public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];

   public doughnutChartData: MultiDataSet = [
   ];
   public doughnutChartType: ChartType = 'doughnut';

   public colors:Color[]=[
     {
       backgroundColor: [
        '#4719F4',
        '#6950D4',
        '#658FEB',
        '#50BBD4',
        '#5EF7C4',
        '#5EF7C4',

 ]
     }
   ]

 
  constructor(private gs:GraficasService) { }

  ngOnInit(): void {

    this.gs.getUserRSDona()
    .subscribe(({labels,values})=>{
      this.doughnutChartLabels = labels;    
      this.doughnutChartData.push(values);      
      
    });
  //   .subscribe(data=>{
  //     const labels= Object.keys(data);
  //     const values= Object.values(data);

  //   })
  }

}
