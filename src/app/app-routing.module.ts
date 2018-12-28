import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthGuard } from './auth/auth.guard';
import { UsersComponent } from './users/users.component';

const routes: Routes = [

  {path:'',component:HomeComponent},
  {
    path:'loginuser',component:LoginuserComponent
  },
  {
    path:'register/:email',component:RegistrationComponent,
    canActivate:[AuthGuard],

  },
  {
    path:'register',component:RegistrationComponent

  },
  {
    path:'users',component:UsersComponent,
    canActivate:[AuthGuard],
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
