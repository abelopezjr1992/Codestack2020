import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { CartCountComponent } from './landing/components/cart-count/cart-count.component';
import { CartListComponent } from './landing/components/cart-list/cart-list.component';


@NgModule({
  declarations: [LandingComponent, CartCountComponent, CartListComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[LandingComponent]
})
export class ViewsModule { }
