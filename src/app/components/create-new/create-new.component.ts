import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.scss']
})
export class CreateNewComponent implements OnInit {
  createForm !: FormGroup;
  submitted=false;
 show=false;
 @Output() messageEvent = new EventEmitter<any>();
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
         this.messageEvent.emit(result);
           
    })
  }
}
