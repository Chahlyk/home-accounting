import {Component, Input, OnInit} from '@angular/core';
import * as Highcharts from 'highcharts';
import {IChart} from '../history.interface';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  @Input() public dataChart: IChart[] = [];

  public highcharts = Highcharts;

  public options!: any;

  public ngOnInit(): void {
    this.addOptions();
    Highcharts.chart('container', this.options);
  }

  private addOptions(): void {
    this.options = {
      chart: {
        plotBackgroundColor: 'ghostwhite',
        plotBorderWidth: null,
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
            format: '{point.name}: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        data: this.dataChart
      }]
    };
  }

}
