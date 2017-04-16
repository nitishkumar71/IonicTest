import { Component } from '@angular/core';
import { ToastController, NavController } from 'ionic-angular';
import { UserService } from '../../providers/user-service';

@Component({
  selector: 'page-signup-page',
  templateUrl: 'signup-page.html',
})
export class SignupPage {
  firstName: String;
  lastName: String;
  emailId: String;
  userPass: String;
  confirmPass: String;
  contactNumber: String;

  constructor(private navController: NavController, private userService: UserService, public toastCtrl: ToastController) {
  }

  registerUser() {
    let toast = this.toastCtrl.create({
      message: '',
      duration: 3000,
      position: 'top'
    });
    this.userService.registerUser(this.firstName, this.lastName, this.emailId,
      this.userPass, this.confirmPass, this.contactNumber)
      .subscribe(data => {
        if (data) {
          toast.setMessage('User was added successfully');
          this.navController.pop();
        } else {
          toast.setMessage('User was not added');
          this.navController.pop();
        }
        toast.present();
      });
  }
}
