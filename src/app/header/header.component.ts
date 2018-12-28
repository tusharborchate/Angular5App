import { Component, OnInit, Inject } from '@angular/core';
import { GlobalvariablesService } from '../globalvariables.service';
import { SESSION_STORAGE, WebStorageService, LOCAL_STORAGE } from 'angular-webstorage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {
  title:string;
  isNavbarCollapsed:boolean;
  login:boolean;
  constructor(  @Inject(LOCAL_STORAGE)private storage:WebStorageService, public globalservice:GlobalvariablesService) {

   }

  ngOnInit() {
   this.isNavbarCollapsed=false;
  this.title="I-Fitness";
this.login=this.globalservice.login;
  }
logout()
{
 this.globalservice.login=false;
 this.login=this.globalservice.login;


}

clear()
{
  this.storage.set("users",null);
  this.storage.set("registerData",null);

}
  
  
}
