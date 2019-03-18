import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-status',
  templateUrl: './request-status.component.html',
  styleUrls: ['./request-status.component.css']
})
export class RequestStatusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  seeDetails(){
     this.router.navigate(['/reqestedproducts']);
  }
}
