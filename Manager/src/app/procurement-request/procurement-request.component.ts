import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurement-request',
  templateUrl: './procurement-request.component.html',
  styleUrls: ['./procurement-request.component.css']
})
export class ProcurementRequestComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeDetails(){
    this.router.navigate(['/procurementdetails']);
  }
}
