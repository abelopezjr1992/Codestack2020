import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/interfaces';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component implements OnInit {
  selectedStudent: Student;
  constructor() { }

  ngOnInit() {
  }
  onSelection(person: Student) {
    this.selectedStudent = person;
  }

}
