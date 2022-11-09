import { Component, OnInit } from '@angular/core';
import { NoteService } from '../noteService/note.service';

@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetallNotesComponent implements OnInit {
  noteArray:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getAllNote();
  }
  getAllNote(){
    this.note.getNotes().subscribe((result:any)=>{
      console.log(result.data.data);
      this.noteArray=result.data.data;
      this.noteArray=this.noteArray.reverse();
      
      console.log(this.noteArray);
      
    })
  }

}
