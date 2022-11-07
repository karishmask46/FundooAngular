import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponentsComponent } from './archive-components/archive-components.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetallNotesComponent } from './getall-notes/getall-notes.component';
import { TrashComponentComponent } from './trash-component/trash-component.component';

const routes: Routes = [
 { path:'registration',component:RegisterComponent},
 {path:'signin',component:LoginComponent},
 {path:'forgotpassword',component:ForgotPasswordComponent},
{path:'resetpassword',component:ResetpasswordComponent},
 {path:'dashboard',component:DashboardComponent,
children:[
  {path:'Notes',component:GetallNotesComponent},
  {path:'Archive',component:ArchiveComponentsComponent},
  {path:'Trash',component:TrashComponentComponent}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
 
