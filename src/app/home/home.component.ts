import { Component, OnInit } from '@angular/core';
import { LoginuserComponent } from '../loginuser/loginuser.component';
import { Router } from '@angular/router';
import { GlobalvariablesService } from '../globalvariables.service';
@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public router:Router,public global:GlobalvariablesService) { }

  ngOnInit() {
  }
   routeLogin()
   {
     this.router.navigate(["/loginuser"]);
     this.global.login=true;
   }
}
