import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AboutUsComponent, CartComponent, LoginComponent, ProductsComponent, ProfileComponent, HomeComponent],
  imports: [
    CommonModule
  ],
  exports:[AboutUsComponent,CartComponent,LoginComponent,ProductsComponent,ProfileComponent,HomeComponent]
})
export class ViewsModule { }
