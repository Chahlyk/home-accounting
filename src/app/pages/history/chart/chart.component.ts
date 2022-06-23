import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { IChart } from '../history.interface';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() public dataChart: IChart[] = [];

  public highcharts = Highcharts;

  public ngOnInit(): void {
    Highcharts.chart('container', this.addOptions());
  }

  private addOptions(): object {
    return {
      chart: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
        plotBackgroundColor: 'ghostwhite',
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: ' '
      },
      credits: {
        enabled: false
      },
      tooltip: {
        enabled: false
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.percentage:.1f} %',
            distance: -70
          }
        }
      },
      series: [{
        data: this.dataChart
      }]
    };
  }

}
