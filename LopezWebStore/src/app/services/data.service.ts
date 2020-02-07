import { Injectable } from '@angular/core';
import { IProduct } from '../interface/iproduct';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userList: User[] = [
    {
      FirstName: 'Abraham',
      LastName: 'Lopez',
      email: 'abelopezjr1992@gmail.com',
      createPW: '1234567',
      createUN: 'abelopezjr1992'
    }
  ];
  products: IProduct[] = [
    {
      id: "Ps4",
      pName: "Playstation 4",
      pNameURL: "Ps4",
      pDesc: "Includes a new 1TB PlayStation 4 system, a matching DualShock 4 Wireless Controller. Play online with your friends, save games online and more with PlayStation Plus membership (sold separately).",
      price: "250",
      quantity: 0,
      img: "/assets/ps4Product.png"
    },
    {
      id: "Xbox One",
      pName: "Xbox One",
      pNameURL: "XboxOne",
      pDesc: "This bundle includes: Xbox One S 500GB Console, Xbox Wireless Controller, HDMI cable (4K Capable), Power cable and a 14-day Xbox Live Gold Trial",
      price: "250",
      quantity: 0,
      img: "/assets/XboxOneProduct.png"
    },
    {
      id: "Gaming Headset",
      pName: "Corsair Headset",
      pNameURL: "CorsairHeadset",
      pDesc: "Connect wirelessly to your PC, PS4, Xbox using low-latency 2.4Ghz wireless via the included USB adapter. Includes Charger, aux cord, heaphone adapter.",
      price: "60",
      quantity: 0,
      img: "/assets/GamingHeadPhonesProduct.png"
    },
    {
      id: "PC",
      pName: "Gaming Computer",
      pNameURL: "GamingComputer",
      pDesc: "One of the best budget PC's out there. Includes CPU: Intel Core i5-8400 – i9-9900 | Graphics: Nvidia GeForce GTX 1050 Ti – RTX 2080 | RAM: Up to 32GB | Storage: 1TB HDD – 1TB SSD",
      price: "600",
      quantity: 0,
      img: "/assets/ComputerProduct.png"
    },
    {
      id: "Ruling Computer",
      pName: "Ruling Games Computer",
      pNameURL: "GamingComputer2",
      pDesc: "Ruling Games recommended PC. Intel Core i7-8700 – i7-9700K | Graphics: Nvidia GeForce GTX 1660 Ti – RTX 2080 Ti | RAM: Up to 64GB | Storage: 1TB HDD – 512GB SSD + 2TB HDD",
      price: "1200",
      quantity: 0,
      img: "/assets/GamingComputerProduct2.png"
    },
  ]
  constructor() { }

  getProducts(): IProduct[] {
    return this.products;
  }
  checkCred(userName: string, passWord: string): boolean {
    let result = false;
    if (userName === this.userList[0].createUN) {
      if (passWord === this.userList[0].createPW) {
        result = true;
      }
    }
    return result;
  }

  checkUserName(userName: string): boolean {
    //Searching if userName exists
    let result = false;
    if (this.userList.find(x => userName.toLowerCase() === x.createUN)) {
      result = true;
    };
    return result;
  }

  addUser(userAccount: User) {
    //const userAccount: User = {
    //  userName: uN.toLowerCase(),
    //  passWord: pW
    // };
    this.userList.push(userAccount);
    console.log(this.userList);
  }
}
