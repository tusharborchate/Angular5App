import { Component, OnInit, Inject } from '@angular/core';
import { inject } from '@angular/core/testing';
import { SESSION_STORAGE, WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';
import { RegistrationModel } from '../models/RegistrationModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalvariablesService } from '../globalvariables.service';
import { keyframes, stagger, state, query, animate, trigger, transition, style } from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations:

    [
      trigger("users", [
        transition("* => *", [

          query(":enter", style({ opacity: 0 }), { optional: true }),

          query(":enter", stagger("300ms", [

            animate(".6s ease-in", keyframes([

              style({ opacity: 0, transform: 'translateY(-75%)', offset: 0 }),
              style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
              style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),


            ]))



          ]),{optional:true}),
          query(":leave", stagger("300ms", [

            animate(".6s ease-in", keyframes([

              style({ opacity:1, transform: 'translateY(0)', offset: 0 }),
              style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
              style({ opacity: 0, transform: 'translateY(-75%)', offset: 1 }),


            ]))



          ]),{optional:true}),
        ])



      ])


    ]

})
export class UsersComponent implements OnInit {
  registerationData: RegistrationModel[];
  searchterm: string;
  constructor(private globalService: GlobalvariablesService,
    private router: Router, @Inject(SESSION_STORAGE) private storage: WebStorageService, @Inject(LOCAL_STORAGE) private localstorage: WebStorageService) {

    this.registerationData = this.localstorage.get("registerData");
    console.log(this.registerationData);
  }

  ngOnInit() {
  }

  edit(i, email) {
    this.router.navigate(["/register", email]);
  }

  delete(i, email) {
    try {

      var userData = this.localstorage.get("users");
      var index;
      for (let i = 0; i < userData.length; i++) {

        if (userData[i].EmailId == email) {
          index = i;
          break;
        }
      }
      this.registerationData.splice(index, 1);

      userData.splice(index, 1);
      if (this.registerationData.length == 0) {
        this.localstorage.set("registerData", null);
        this.localstorage.set("users", null);
        this.globalService.login = false;
        this.storage.set("login", false);
        this.router.navigate(["/"]);
      }
      this.localstorage.set("registerData", this.registerationData);

      this.localstorage.set("users", userData);


    }
    catch (e) {

    }
  }
}
