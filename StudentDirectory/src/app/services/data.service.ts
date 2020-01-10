import { Injectable } from '@angular/core';
import { Student } from '../interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private cardData: Student;

  private studentData: Student[] = [
    {
      fN: 'Abraham',
      lN: 'Lopez',
      sN: 'something',
      nN: 'Abe',
      hob: 'Reading Manga'
    },
    {
      fN: 'Esteban',
      lN: 'Zaragoza',
      sN: 'something',
      nN: 'Erny',
      hob: 'Rocket League'
    },
    {
      fN: 'Jon',
      lN: 'Stewart',
      sN: 'Jon Stewart',
      nN: 'Jon-less H',
      hob: 'Liking characters to death'
    },
    {
      fN: 'Johnny',
      lN: 'Uribe',
      sN: 'JohnnyU',
      nN: 'Johnny',
      hob: 'Long walks on the beach'
    },
    {
      fN: "Zach",
      lN: "Davis",
      sN: "zdavis",
      nN: "Wynan",
      hob: "games"
    },
    {
      fN: 'Robert',
      lN: 'Burns',
      sN: 'Robert Burns',
      nN: 'Rob',
      hob: 'Airsoft'
    },
    {
      fN: 'Francisco',
      lN: 'Chavez',
      nN: 'Frankie',
      sN: 'Francisco Chavez',
      hob: 'reading'
    }
  ];
  constructor() { }

  getStudent(): Student[] {
    return this.studentData;
  }

  setCardData(person: Student) {
    //Save student data for Card
    this.cardData = person;

  }

  getCardData():Student {
    //Retrieves student data for Card
    return this.cardData;
  }
}
