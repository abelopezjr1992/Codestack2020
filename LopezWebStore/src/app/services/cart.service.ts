import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: IProduct[] = [];
  public $cartItems = new BehaviorSubject<IProduct[]>(this.cartItems);

  cartTotal = 0;
  $cartTotal = new BehaviorSubject<number>(this.cartTotal);

  cartQuantity = 0;
  $cartQuantity = new BehaviorSubject<number>(this.cartQuantity);
  constructor() { }
  addItemsToCart(item: IProduct) {
    let cartItem = this.cartItems.find(x => x.id === item.id);

    if (cartItem) {
      cartItem.quantity++;
    }
    else {
      item.quantity = 1;
      this.cartItems.push(item);
    }
    this.cartQuantity++;
    console.log(this.cartItems);
    this.cartTotal = parseFloat(this.cartTotal + '') + parseFloat(item.price);

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }

  removeProduct(item, index) {
    this.cartItems.splice(index, 1);
    const totalPrice = item.quantity * parseFloat(item.price);
    this.cartTotal = parseFloat(this.cartTotal + '') - totalPrice;
    this.cartQuantity -= item.quantity;

    this.$cartItems.next(this.cartItems);
    this.$cartTotal.next(this.cartTotal);
    this.$cartQuantity.next(this.cartQuantity);
  }
}
