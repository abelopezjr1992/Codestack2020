import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cartCount = 0;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.$cartQuantity.subscribe(count => {
      this.cartCount = count;
    });
  }
  
}
