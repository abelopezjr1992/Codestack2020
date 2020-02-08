import { Component, OnInit } from '@angular/core';
import { checkout } from 'src/app/interface/checkout';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
  }
  checkout(country: string, creditCard: string, firstName: string, lastName: string, address: string, city: string, state: string, zipCode: string) {
    const addThisInfo: checkout = {
      country: country,
      creditCard: creditCard,
      firstName: firstName,
      lastName: lastName,
      address: address,
      city: city,
      state: state,
      zipCode: zipCode
    }
    this.dService.saveInfo(addThisInfo)
    alert("Your Items will Arrive in 7 Days. Thank you for becoming a Ruler!")
  }
}
