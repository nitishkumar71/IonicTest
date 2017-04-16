import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
  private options: RequestOptions;
  private apiUrl: String = '';
  //private apiUrl:String='http://52.21.74.42/api';

  constructor(public http: Http) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: headers });
  }

  public loginUser(emailId: String, password: String) {
    let data = { "email": emailId, "password": password };

    return this.http.post(this.apiUrl + '/login.php', data, this.options)
      .map(response => response.json().status);

  }

  public registerUser(firstName: String, lastName: String, emailId: String,
    userPass: String,
    confirmPass: String,
    contactNumber: String) {
    let data = JSON.stringify({
      "email": emailId, "firstname": firstName, "lastname": lastName,
      "password": userPass, "contact": contactNumber
    });
    return this.http.post(this.apiUrl + '/profile.php', data, this.options)
      .map(response => response.json().status);
  }

  public getUser(id: String) {
    let data = JSON.stringify({ "id": id });
    console.log(data);
    return this.http.post(this.apiUrl + '/profile.php', data, this.options)
      .map(response => response.json());
  }
}
