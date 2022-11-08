import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {
  createForm !: FormGroup;
  submitted=false;
 show=false;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm=this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }
  isShow(){
    this.show=true;
  }
  close():void{
    this.show=false;
  }
  onSubmit() {
    this.submitted = true;
    if (this.createForm.valid){
      return;
    }
  }
  onReset() {
    this.submitted = false;
    this.createForm.reset();
}
}
