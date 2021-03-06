import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  displayNewReports(){
    this.router.navigate(['/newreport']);
  }

  displayMissingReports(){
    this.router.navigate(['/missingreports']);
  }

  warehouses(){
    this.router.navigate(['/warehouses']);
  }

  thresholdlist(){
    this.router.navigate(['/thresholdlist']);
  }

  reportHistory(){
    this.router.navigate(['/reporthistory']);
  }

  discountedSales(){
    this.router.navigate(['/discountedsales']);
  }

  showStatusOfRequest(){
    this.router.navigate(['/requeststatus']);
  }

  showProcurementRequest(){
    this.router.navigate(['/showprocurementrequest']);
  }

}
