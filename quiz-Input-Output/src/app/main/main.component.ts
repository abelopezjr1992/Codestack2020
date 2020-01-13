import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/interfaces';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  selectedStudent: Student;

  constructor() { }

  ngOnInit() {
  }
  onSelection(person: Student){
    this.selectedStudent=person;
  }
}
