import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [NavbarComponent, ModalComponent],
  imports: [
    CommonModule,
    NgbModule

  ],
  exports: [
    NavbarComponent,
    ModalComponent]
})

export class SharedModule { }
