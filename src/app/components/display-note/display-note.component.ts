import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() childMessage:any;
  @Output() refreshDisplay=new EventEmitter<any>();
  @Output() messagevent=new EventEmitter<any>();
  @Output() colorchange=new EventEmitter<any>();
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(notes:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '600px',
      height:'170px',
      data:notes,
    });
    dialogRef.afterClosed().subscribe((result:any) => {
      console.log('The dialog was closed');
    });
  }
  notearchive(event:any){
    console.log(event);
    
    this.messagevent.emit(event)
  }
  iconautorefresh(event:any){
    console.log(event);   
    this.refreshDisplay.emit(event)
  }
  colorRefresh(event:any){
   this.colorchange.emit(event)
  }

}
