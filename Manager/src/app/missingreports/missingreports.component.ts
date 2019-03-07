import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-missingreports',
  templateUrl: './missingreports.component.html',
  styleUrls: ['./missingreports.component.css']
})
export class MissingreportsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
