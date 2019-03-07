import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-outlets',
  templateUrl: './outlets.component.html',
  styleUrls: ['./outlets.component.css']
})


export class OutletsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  individualStore(){
    this.router.navigate(['/individualstores']);
  }

}
