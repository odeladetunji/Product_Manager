import { Component, OnInit } from '@angular/core';
import jsonFile from 'jsonfile';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addProduct(){
    event.preventDefault();
    console.log('product added')
  }

}
