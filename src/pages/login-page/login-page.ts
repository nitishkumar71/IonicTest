import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from '../signup-page/signup-page';
import { HomePage } from '../home/home';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-login-page',
  templateUrl: 'login-page.html',
})
export class LoginPage {
  dataSent: any;
  loginFailed: Boolean;
  userName:String;
  userPass: String;
  
  constructor(private navController: NavController, private userService: UserService) {
  }

  naviagateSignUp() {
    this.navController.push(SignupPage);
  }

  loginUser() {
    this.userService.loginUser(this.userName, this.userPass)
      .subscribe(data => {
        if (data)
          this.navController.setRoot(HomePage);
        else
          this.loginFailed = true;
      });
  }
}
