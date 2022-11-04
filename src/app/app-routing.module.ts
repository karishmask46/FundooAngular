import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';

const routes: Routes = [
 { path:'registration',component:RegisterComponent},
 {path:'signin',component:LoginComponent},
 {path:'forgotpassword',component:ForgotPasswordComponent},
{path:'resetpassword',component:ResetpasswordComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
