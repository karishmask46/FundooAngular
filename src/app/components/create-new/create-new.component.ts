import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from '../noteService/note.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {
  createForm !: FormGroup;
  submitted=false;
 show=false;


  constructor(private formBuilder: FormBuilder, private note:NoteService) { }

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
    console.log('valid data', this.createForm.value);
    console.log('note created'); 
    let abcd={
      title:this.createForm.value.title,
      description:this.createForm.value.description
    }
    this.note.addNotes(abcd).subscribe((result:any)=>{
         console.log('note',result);      
    })
  }
  // onSubmit() {
  //   this.submitted = true;
  //   if (this.createForm.valid){
  //     return;
  //   }
  // }
//   onReset() {
//     this.submitted = false;
//     this.createForm.reset();
// }
}
