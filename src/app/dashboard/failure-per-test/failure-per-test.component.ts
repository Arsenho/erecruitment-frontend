import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { DashboardService } from 'src/app/services/dashboard.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { OfferService } from '../../services/offer.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-failure-per-test',
  templateUrl: './failure-per-test.component.html',
  styleUrls: ['./failure-per-test.component.css']
})
export class FailurePerTestComponent implements OnInit {

  my_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    chartLabel: 'Series A',
    chartData: [65, 59, 80, 81, 56, 55, 40]
  }
  current_offer_id = 1
  offer_id = 0
  offers = []
  employer_id = -1


  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Array<any>
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData:{ label: string, data: Array<any> }[] = [
    {
      label: 'vide',
      data: Array<any>()
    }
  ];

  public lineChartData: { label: string, data: Array<any> }[] = [
    {
      label: 'vide',
      data: Array<any>()
    }
  ];
  public lineChartLabels: Array<any>

  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  constructor(private dashboardService: DashboardService,
    private offerService: OfferService,
    private userService: UserService,
    private router: Router) {
    console.log(this.offer_id)
    this.getAllOffers()
  }

  public setMyData(): any {
    this.dashboardService.getNumFailurePerTestForOffer(this.current_offer_id).subscribe(
      (data: any) => {
        this.my_data = data
        console.log(data)
        this.lineChartLabels = data.labels
        this.barChartLabels = data.labels
        this.lineChartData.push({
          label: data.chartLabel,
          data: data.chartData
        });
        this.barChartData.push({
          label: data.chartLabel,
          data: data.chartData
        });
        this.lineChartData.splice(0, 1)
        this.barChartData.splice(0, 1)
        console.log(this.lineChartData)
      },
      (err: HttpErrorResponse) => {
        console.error(err);

      }
    )
  }

  set_offer_id(offer_id){
    this.offer_id = offer_id
    if (this.offer_id != 0){
      this.setMyData()
    }
    this.router.navigate(['/dashboard/failure-per-test'])
  }


is_auth(groups) {
  for (let group of groups){
    if (group == 2 || group == 3){
      return true
    }
  }
  return false
}

  getAllOffers(){
    this.userService.get_logged_user().subscribe(
      (data: any) => {
        console.log(data.groups)
        if (this.is_auth(data.groups)){
          this.offerService.getOfferEmployer(data.id).subscribe(
            (data: any) => {
              console.log(data);

              this.offers = data
            },
            (err: HttpErrorResponse) => {
              console.error(err);

            }
          )
        }else {
          console.log("you are not an employer");

        }

      },
      (err) => {
        console.error(err);
        //this.employer_id.id = -1
      }
    )
  }

  ngOnInit(): void {

  }



  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
