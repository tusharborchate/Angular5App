import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewuserComponent } from '../newuser/newuser.component';
import { LoginuserComponent } from '../loginuser/loginuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
exports: [LoginuserComponent,RegistrationComponent];
@NgModule({
  declarations: [NewuserComponent, LoginuserComponent, RegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [LoginuserComponent,RegistrationComponent]
})
export class LoginModule { }
