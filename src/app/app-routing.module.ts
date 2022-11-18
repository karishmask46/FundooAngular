import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveComponent } from './components/archive/archive.component';
import { AuthenticationGuard } from './components/authentication.guard';
import { CreateNewComponent } from './components/create-new/create-new.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DisplayNoteComponent } from './components/display-note/display-note.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { GetallNotesComponent } from './components/getall-notes/getall-notes.component';
import { IconComponent } from './components/icon/icon.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetpasswordComponent } from './components/resetpassword/resetpassword.component';
import { TrashComponent } from './components/trash/trash.component';

const routes: Routes = [
  {path:'',redirectTo:"/signin",pathMatch:'full'},
  { path: 'registration', component: RegisterComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'forgotpassword', component: ForgotPasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  {path: 'dashboard', component: DashboardComponent,canActivate:[AuthenticationGuard],
    children: [
      { path: 'Notes', component: GetallNotesComponent },
      { path: 'Archive', component: ArchiveComponent },
      { path: 'Trash', component: TrashComponent },
      { path: 'cratenew', component: CreateNewComponent },
      { path: 'displaynote', component: DisplayNoteComponent },
      { path: 'Icon', component: IconComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

