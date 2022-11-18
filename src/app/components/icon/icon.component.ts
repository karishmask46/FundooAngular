import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashComponent } from '../trash/trash.component';
import { ArchiveComponent } from '../archive/archive.component';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Input() notecard: any;
  @Output() refreshcolor=new EventEmitter<any>();
  @Output() archiverefresh=new EventEmitter<any>();
  @Output() trashrefresh=new EventEmitter<any>();
  noteID: any;
  colorarray = [{ Colorcode: "#f28b82" }, 
  { Colorcode: "#fbbc04" }, 
  { Colorcode: "#fff475" },
   { Colorcode: "#ccff90" }, 
   { Colorcode: "#a7ffeb" }, 
   { Colorcode: "#cbf0f8" },
    { Colorcode: "#aecbfa" }, 
    { Colorcode: "#d7aefb" }, 
    { Colorcode: "#fdcfe8" }, 
    { Colorcode: "#e6c9a8" }, 
   { Colorcode: "#e8eaed" },
    { Colorcode: "white" }];

  colorId: any;
  isArchieve: boolean = false;
  isDeleted: boolean = false;
  constructor(private note: NoteService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.notecard);
    let Component = this.activatedroute.snapshot.component;
    if (Component == TrashComponent) {
         this.isDeleted = true;
       }
   
       if (Component == ArchiveComponent) {
         this.isArchieve = true;
       }
     
     }
  deleteNote() {
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    console.log(data.noteIdList);
    console.log(data);

    this.note.trashnote(data).subscribe((result: any) => {
      this.trashrefresh.emit(result);
      console.log('note deleted',result)
    })

  }
  updatecolor(colour:any){
    console.log(colour);  
    let data = {
      noteIdList:[this.notecard.id],
      color: colour
    }
    this.note.changecolor(data).subscribe((result: any) => {
      console.log('note color changed',result)
      this.refreshcolor.emit(result)
    })
  }
 
  restorenote(){
    let data = {
      noteIdList: [this.notecard.id],
      isDeleted: false,
    }
    this.note.trashnote(data).subscribe((result: any) => {
      console.log('note restored',result)
    })
  }
  deleteforevernote(){
    let data ={
      noteIdList: [this.notecard.id],
      isDeleted: true,
    }
    this.note.deleteforever(data).subscribe((result: any) => {
      
      console.log('note deleted forever',result)
      
    })
  }
  archive(){
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: true,
    }
    this.note.archivenote(data).subscribe((result:any)=>{
      console.log('note archived successfully',result); 
      this.archiverefresh.emit(result);
    })
  }
  unArchive(){
    let data = {
      noteIdList: [this.notecard.id],
      isArchived: false,
    }
    this.note.archivenote(data).subscribe((result:any)=>{
      console.log('note unarchived successfully',result); 
    })

  }
}
