import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/interfaces';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})
export class Box1Component implements OnInit {
  selectedStudent: Student;
  constructor() { }

  ngOnInit() {
  }
  onSelection(person: Student){
    this.selectedStudent=person;
  }

}
