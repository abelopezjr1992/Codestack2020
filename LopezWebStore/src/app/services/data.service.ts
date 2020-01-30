import { Injectable } from '@angular/core';
import { IProduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: IProduct[] = [
    {
      id: "Ps4",
      pName: "Playstation 4",
      pNameURL: "Ps4",
      pDesc: "Brought to you by one ....",
      price: "249.99",
      quantity: 0,
      img: ""
    },
    {
      id: "Xbox One",
      pName: "Xbox One",
      pNameURL: "XboxOne",
      pDesc: "Brought to you by one ....",
      price: "249.99",
      quantity: 0,
      img: ""
    },
    {
      id: "PC",
      pName: "Gaming Computer",
      pNameURL: "GamingComputer",
      pDesc: "Brought to you by one ....",
      price: "600.99",
      quantity: 0,
      img: ""
    },
    {
      id: "Ps4",
      pName: "Playstation 4",
      pNameURL: "Ps4",
      pDesc: "Brought to you by one ....",
      price: "299.99",
      quantity: 0,
      img: ""
    },
  ]
  constructor() { }
  
  getProducts(): IProduct[] {
    return this.products;
  }
}
