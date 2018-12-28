import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {LoginModule} from './login/login.module';
import { GlobalvariablesService } from './globalvariables.service';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { logWarnings } from 'protractor/built/driverProviders';
import { LoginModel } from './models/LoginModel';
import { StorageServiceModule} from 'angular-webstorage-service';
import { AccountService } from './account.service';
import { RegistrationModel } from './models/RegistrationModel';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './users/users.component';
import { UsersFilter } from './users/users.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,UsersFilter ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    StorageServiceModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [GlobalvariablesService,LoginModel,AccountService,RegistrationModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
