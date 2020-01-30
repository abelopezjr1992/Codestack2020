import { Injectable } from '@angular/core';
import { Iproduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsInCart: Iproduct[] = [];
  products: Iproduct[] = [
    {
      id: '1',
      pName: 'PS4',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: '2',
      pName: 'Xbox One',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: 'Laptop',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    },
    {
      id: 'Desktop',
      pName: 'Ninja Stars',
      pNameURL: 'NinjaStars',
      pDesc: 'Paper Ninja Star',
      additionalInfo: 'May Cause Paper Cuts',
      price: 'View in Cart',
      qty: 0
    }
  ]
  constructor() { }
  getProducts(): Iproduct[] {
    return this.products;
  }
  addToCart(cartItem: Iproduct) {
    if (!this.itemsInCart.includes(cartItem)) {
      cartItem.qty++;
      this.itemsInCart.push(cartItem);
      console.log(this.itemsInCart);
    }
    else {
      //search for the item in cart
      //then add 1 to quanity

    }
  }
  getCartItems(): Iproduct[] {
    return this.itemsInCart;
  }
  emptyCart() {
    this.itemsInCart.length = 0;
  }
  removeItemFromCart(id: Iproduct) {
    //search for product and remove it from itemsInCart
    //find the index location of product
    const index = this.findItemInCart(id);
    //perform a splice
    this.itemsInCart
    this.itemsInCart.splice(index, 1);
  }
  findItemInCart(id: Iproduct): number {
    //find the Id in our cart

    return this.itemsInCart.indexOf(id);
  }
}
