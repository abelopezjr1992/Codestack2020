import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  cartCount = 0;
  cartItems: IProduct[] = [];
  showList = false;
  cartTotal = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartItems.subscribe(items => {
      //this.cartCount = items.length;
      this.cartItems = items;
    });

    this.cartService.$cartTotal.subscribe(total => {
      this.cartTotal = total;
    });

    this.cartService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }

  toggleList() {
    this.showList = !this.showList;
  }

  removeFromCart(item, index) {
    this.cartService.removeProduct(item, index);
  }
}
