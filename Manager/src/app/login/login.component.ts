import { Component, OnInit } from '@angular/core';
import jsonFile from 'jsonfile';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Login(){
    event.preventDefault();
    console.log('login in');
  }

}
