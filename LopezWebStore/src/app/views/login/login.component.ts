import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { User } from 'src/app/interface/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dService: DataService) { }

  ngOnInit() {
  }

  logIn(userName, passWord) {
    //we are going to compare password stored in our services
    if (this.dService.checkCred(userName, passWord)) {
      alert('You are Logged In');
    }
    else {
      alert('Try Again');
    }
  }

  createAccount(FirstName: string, LastName: string, email: string, confirmEmail: string, createPW: string, confirmPW: string, createUN: string) {
    console.log(FirstName, LastName, email, confirmEmail, createPW, confirmPW, createUN);
    //Checks Email & UserName & Password
    if (email === confirmEmail && createPW.length > 3) {
      if (createPW === confirmPW) {
        //check to see if UserName is taken
        if (this.dService.checkUserName(createUN)) {
          alert('user Name already Exists');
        }
        else {
          // you send entire object to be added to userLIst
          const addThisName: User= {
            FirstName: FirstName,
            LastName: LastName,
            email: email,
            createPW: createPW,
            createUN: createUN
          }
          this.dService.addUser(addThisName);
        }
      } else {
        alert('Password does not Match');
      }
    } else {
      alert('An Unexpected Error Occurred. Please Restart your computer.')
    }
  }
}
