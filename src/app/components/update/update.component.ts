import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
title:any;
description:any;
noteId:any;
@Output() updaterefresh=new EventEmitter<any>();
  constructor(private notes:NoteService,public dialogRef: MatDialogRef<UpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
  ) {}
  ngOnInit():void{
    console.log(this.data,this.data.noteId);
    this.title=this.data.title;
    this.description=this.data.description; 
  }

  onNoClick(): void {
    console.log(this.title,this.description);
    let data={
      noteId:this.data.id,
      title:this.title,
      description:this.description,
    }
    this.notes.updatenote(data).subscribe((response:any)=>{
      console.log(response);
      this.updaterefresh.emit(response);
    })
    this.dialogRef.close();  
  }
}
