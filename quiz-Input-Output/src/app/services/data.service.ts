import { Injectable } from '@angular/core';
import { Student } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cardData: Student;
  
  private studentData: Student[]= [
    {
      fName: "Zach",
      lName: "Davis",
      sName: "zdavis",
      nName: "Wynan",
      hobbies: "games"
    },
    {
      fName: "Kevin",
      lName: "Cab",
      sName: "kCab",
      nName: "Idiot",
      hobbies: "instagram models"
    },
    {
      fName: "Joseph",
      lName: "IDk",
      sName: "joeMama",
      nName: "Double Idiot",
      hobbies: "Flipping me off"
    },
    {
      fName: 'Joseangel',
      lName: 'Pantoja',
      sName: 'Angel',
      nName: 'Angel',
      hobbies: 'Hiking'
    },
    {
      fName: 'Deon',
      lName: 'Simmons Jr.',
      sName: 'Deon',
      nName: 'N/A',
      hobbies: 'Reading Comics'
    },
    {
      fName: 'Trever',
      lName: 'Edwards',
      nName: 'Ted',
      sName: 'Trever Edwards',
      hobbies: 'Respecting Women'
    },
    {
      fName: 'Esteban',
      lName: 'Zaragoza',
      sName: 'Esteban Z',
      nName: 'uB Darkness',
      hobbies: 'chillin'
    },
    {
      fName: 'Nimish',
      lName: 'Lal',
      sName: 'Nimish Lal',
      nName: 'Nimish',
      hobbies: 'playing video games'
    },
    {
      fName: 'Lourn',
      lName: 'Selga',
      sName: 'Lourn?',
      nName: 'Lrrrn',
      hobbies: 'Plastic Model Building'
    },
    {
      fName: 'Jon',
      lName: 'Stewart',
      sName: 'Jon Stewart',
      hobbies: 'Liking characters to death',
      nName: 'Jon-less H'
    },
    {
      fName: 'Johnny',
      lName: 'Uribe',
      sName: 'JohnnyU',
      nName: 'Johnny',
      hobbies: 'Long walks on the beach'
    },
    {
      fName: 'Abraham',
      lName: 'Lopez',
      sName: 'something',
      nName: 'Abe',
      hobbies: 'Reading Manga'
    },
    {
      fName: 'Robert',
      lName: 'Burns',
      sName: 'Robert Burns',
      hobbies: 'Airsoft',
      nName: 'Rob'
    },
    {
      fName: 'David',
      lName: 'Abdallah',
      sName: 'DaveDaAverageDude',
      nName: 'Dave',
      hobbies: 'Work'
    },
    {
      fName: 'Carson',
      lName: 'Huber',
      sName: 'EcstaticCarson',
      nName: 'Carson',
      hobbies: 'Playing games & exercising'
    },
    {
      fName: 'Carter',
      lName: 'Galvez',
      sName: 'carter209cg',
      hobbies: 'Messing up logic and code',
      nName: 'son of Bonacci'
    },
    {
      fName: 'Francisco',
      lName: 'Chavez',
      nName: 'Frankie',
      hobbies: 'reading',
      sName: 'Francisco Chavez'
    },
    {
      fName: 'Robert',
      lName: 'Burns',
      sName: 'Robert Burns',
      nName: 'Rob',
      hobbies: 'Airsoft'
    }
  ]
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
