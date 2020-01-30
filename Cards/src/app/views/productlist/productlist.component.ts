import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Iproduct } from 'src/app/interfaces/iproduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Iproduct[];

  constructor(private dservice: DataService) { }

  ngOnInit() {
    this.products = this.dservice.getProducts();
  }
  addToCart(p: Iproduct) {
    this.dservice.addToCart(p);
  }
}
