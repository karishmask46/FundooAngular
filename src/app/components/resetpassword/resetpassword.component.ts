import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  resetForm !: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      Newpassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: ['', [Validators.required, Validators.minLength(6)]],
      
    })
  }
  onset() {
    this.submitted = true;
    if (this.resetForm.valid) {
      return;
    }
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
  }

  onReset() {
    this.submitted = false;
    this.resetForm.reset();
  }

}
