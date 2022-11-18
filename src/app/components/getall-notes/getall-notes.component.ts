import { TOUCH_BUFFER_MS } from '@angular/cdk/a11y/input-modality/input-modality-detector';
import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetallNotesComponent implements OnInit {
  noteArray:any;
  getnote:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote(){
    this.note.getNotes().subscribe((result:any)=>{
      console.log(result.data.data);
      this.noteArray=result.data.data;
      this.noteArray=this.noteArray.reverse();
      this.noteArray=this.noteArray.filter((k:any)=>{
        return k.isArchived==false && k.isDeleted==false;
      }) 
      console.log(this.noteArray);     
    })
  }
  autocreatenote(event:any){
    console.log(event);
    this.getAllNote();
  }
  autodispalay(event:any){
    console.log(event);
    
    this.getAllNote();
  }
  autoarchive(event:any){
    console.log(event);
    this.getAllNote();
  }
  iconrefresh(event:any){
    console.log(event);
    this.getAllNote();
  }
}
