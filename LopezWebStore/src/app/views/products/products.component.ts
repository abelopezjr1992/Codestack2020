import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import { DataService } from 'src/app/services/data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  items: IProduct[] = []
  constructor(private dService: DataService, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.dService.getProducts();
  }


}
