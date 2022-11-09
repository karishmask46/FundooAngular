import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/User_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,private loginuser:UserService) { }



  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      emailorphone: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onNext() {
    this.submitted = true;
    if (this.loginForm.valid) {
      console.log('valid data', this.loginForm.value);
      console.log('do api call');
    let abcd= {
      email: this.loginForm.value.emailorphone,
      password: this.loginForm.value.password,
      service: "advanced"
    }
    this.loginuser.login(abcd).subscribe((result:any)=>
      {
        console.log(result.id);
        localStorage.setItem('token',result.id)
      })
  }
  else {
    console.log('invalid data', this.loginForm.value);
    console.log('no api call');

  }
  }

}
