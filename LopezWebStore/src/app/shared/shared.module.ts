import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [NavbarComponent, ModalComponent],
  imports: [
    CommonModule,
    NgbModule,
    AppRoutingModule

  ],
  exports: [
    NavbarComponent,
    ModalComponent]
})

export class SharedModule { }
