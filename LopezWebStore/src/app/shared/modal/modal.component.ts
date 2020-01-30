import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/interface/iproduct';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  closeResult: string;
  @Input() item: IProduct;
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }
  openBackDropCustomClass(content) {
    this.modal.open(content, { backdropClass: 'light-blue-backdrop' });
  }

  openWindowCustomClass(content) {
    this.modal.open(content, { windowClass: 'dark-modal' });
  }

  openSm(content) {
    this.modal.open(content, { size: 'sm' });
  }

  openLg(content) {
    this.modal.open(content, { size: 'lg' });
  }

  openXl(content) {
    this.modal.open(content, { size: 'xl' });
  }

  openVerticallyCentered(content) {
    this.modal.open(content, { centered: true });
  }

  openScrollableContent(longContent) {
    this.modal.open(longContent, { scrollable: true });
  }

}
