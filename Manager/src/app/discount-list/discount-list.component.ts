import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount-list',
  templateUrl: './discount-list.component.html',
  styleUrls: ['./discount-list.component.css']
})
export class DiscountListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  showDiscountedSales(){
    this.router.navigate(['/discounteddetails']);
  }

}
