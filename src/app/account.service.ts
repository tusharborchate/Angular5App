import { Injectable, Inject } from '@angular/core';
import { LoginModel } from './models/LoginModel';
import { resource } from 'selenium-webdriver/http';
import { SESSION_STORAGE, WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { RegistrationModel } from './models/RegistrationModel';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  userData: LoginModel[];
  registerData: RegistrationModel[];
  constructor(@Inject(SESSION_STORAGE) private storageData: WebStorageService, @Inject(LOCAL_STORAGE) private localStorage: WebStorageService) { }

  //login service
  async GetLogin(loginModel: LoginModel) {
    var result: boolean = false;
    //variable to store session data

    try {
      this.userData = this.localStorage.get("users");
      console.log(this.userData);

      //if session data null
      if (this.userData == null) {
        return false;
      }

      //check if session data contains loginmodel
      for (let i = 0; i < this.userData.length; i++) {

        if (this.userData[i].EmailId == loginModel.EmailId && this.userData[i].Password == loginModel.Password) {
          return true;
        }
      }
    }
    catch (e) {

    }
    return false;
    //sample http api call

    // await
    // this.http.get(this.apiinvitefriendUrl + 'useremailId=' + emailId + "&emailId=" + friendEmailId).toPromise().then(data => {
    //   this.resData = data;
    // }, err => {
    //   console.log(err);
    // });


    // return result;
  }


  async  Registration(registrationModel: RegistrationModel) {
    try {
      var result = await this.CreateUser(registrationModel);
      return result;
    }
    catch (e) {

    }
  }

  private CreateUser(registrationModel: RegistrationModel) {
    try {

    
      if (this.userData == null) {
        this.userData = [];
        this.registerData = [];
      }
      for (let i = 0; i < this.userData.length; i++) {

        if (this.userData[i].EmailId == registrationModel.EmailId) {
          return false;
        }
      }
    
       
      return true;
    }
    catch (e) {
      return false;
    }
  }


  async httpAPICall() {
    // await this.httpAPICall
  }
}
