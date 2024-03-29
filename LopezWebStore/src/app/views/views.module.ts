import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AtestComponent } from './atest/atest.component';
import { ModalComponent } from '../shared/modal/modal.component';
import { AppRoutingModule } from '../app-routing.module';
import { CheckoutComponent } from './checkout/checkout.component';



@NgModule({
  declarations: [AboutUsComponent, CartComponent, LoginComponent, ProductsComponent, ProfileComponent, HomeComponent, AtestComponent, CheckoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [AboutUsComponent, CartComponent, LoginComponent, ProductsComponent, ProfileComponent, HomeComponent, AtestComponent],
  entryComponents: [AtestComponent]
})
export class ViewsModule { }
