import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCount: number = 0;
  public $cartCount= new BehaviorSubject<number>(this.cartCount);


  constructor() { }
  addToCart(){
    this.cartCount++;
    this.$cartCount.next(this.cartCount);
  }
  resetCount(){
    this.cartCount=0;
    this.$cartCount.next(this.cartCount);
  }
}
