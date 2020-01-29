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



@NgModule({
  declarations: [AboutUsComponent, CartComponent, LoginComponent, ProductsComponent, ProfileComponent, HomeComponent, AtestComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AboutUsComponent, CartComponent, LoginComponent, ProductsComponent, ProfileComponent, HomeComponent, AtestComponent]
})
export class ViewsModule { }
