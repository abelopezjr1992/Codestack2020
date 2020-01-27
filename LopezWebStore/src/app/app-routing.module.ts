import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { CartComponent } from './views/cart/cart.component';
import { LoginComponent } from './views/login/login.component';
import { ProductsComponent } from './views/products/products.component';
import { ProfileComponent } from './views/profile/profile.component';
import { HomeComponent } from './views/home/home.component';
import { AtestComponent } from './views/atest/atest.component';


const routes: Routes = [ 
  { path: 'about-us', component: AboutUsComponent},
  { path: 'cart', component:  CartComponent},
  { path: 'login', component: LoginComponent},
  { path: 'products', component:  ProductsComponent},
  { path: 'profile', component:  ProfileComponent},
  { path: 'home', component: HomeComponent},
  {path: 'atest', component : AtestComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
