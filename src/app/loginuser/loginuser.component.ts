import { Component, OnInit, inject, Inject } from '@angular/core';
import { LoginModel } from '../models/LoginModel';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { SESSION_STORAGE, WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { GlobalvariablesService } from '../globalvariables.service';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-loginuser',
  templateUrl: './loginuser.component.html',
  styleUrls: ['./loginuser.component.scss']
})
export class LoginuserComponent {
  loginform: FormGroup;
  userdata: LoginModel[];
  loginfalse: boolean = false;
  constructor(private globalvariable: GlobalvariablesService, private loginmodel: LoginModel, private formBuilder: FormBuilder, @Inject(SESSION_STORAGE) private storage: WebStorageService, private accountService: AccountService,private router:Router,@Inject(LOCAL_STORAGE)private localStorage) {
    this.loginform = this.formBuilder.group({
      email: [this.loginmodel.EmailId, Validators.compose([Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")])],
      password: [this.loginmodel.Password, Validators.required],

    });

  }

  //async login submit method
  async Login() {
    try {
      //await to check login data
      await this.accountService.GetLogin(this.loginmodel).then(data => {
        console.log(this.loginmodel.EmailId);
        console.log(data);
        if (data == true) {
          //get user list from session storage
          this.userdata = this.localStorage.get("users");
          this.storage.set("login", true);
          //set global variable
          this.globalvariable.login = true;

          // this.userdata.push(this.loginmodel);
          // this.localStorage.set("users", this.userdata);
           this.router.navigate(this.globalvariable.redirectUrl?[this.globalvariable.redirectUrl]:['users']  );

        }
        else {
          this.loginfalse = true;
        }
      });
    }
    catch (e) {

    }


  }


  registernavigate()
  {
    this.router.navigate(["register"]);
  }

}
