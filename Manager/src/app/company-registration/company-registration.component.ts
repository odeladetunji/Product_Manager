import { Component, OnInit } from '@angular/core';
import jsonFile from 'jsonfile';

@Component({
  selector: 'app-company-registration',
  templateUrl: './company-registration.component.html',
  styleUrls: ['./company-registration.component.css']
})
// const getFile = fs.createReadStream('../');
export class CompanyRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  create_account(){
    event.preventDefault();
    console.log("Form was submitted");
  }

}
