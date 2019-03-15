import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thresholdlist',
  templateUrl: './thresholdlist.component.html',
  styleUrls: ['./thresholdlist.component.css']
})
export class ThresholdlistComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moreDetaislOnThisProduct(){
     this.router.navigate(['/thresholddetails']);
  }

}
