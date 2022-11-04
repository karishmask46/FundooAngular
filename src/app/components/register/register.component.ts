import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/User_service/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private user: UserService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', Validators.required],
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      console.log('valid data', this.registerForm.value);
      console.log('do api call');
      let data = {
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        email: this.registerForm.value.email,
        password: this.registerForm.value.Password,
        service: "advanced"
      }
      this.user.register(data).subscribe((result:any)=>
      {
        console.log(result);
        
      })

    }
    else {
      console.log('invalid data', this.registerForm.value);
      console.log('no api call');

    }



  }
}







