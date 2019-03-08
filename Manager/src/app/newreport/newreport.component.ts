import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newreport',
  templateUrl: './newreport.component.html',
  styleUrls: ['./newreport.component.css']
})
export class NewreportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showSales(){
    this.router.navigate(['/sales']);
  }
}
