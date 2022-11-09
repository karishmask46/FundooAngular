import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpServiceService } from '../service/HttpService/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any;

  constructor(private http:HttpServiceService) { 
    this.token=localStorage.getItem('token')
  }
  addNotes(data:any){
    console.log(data,this.token);
    console.log('do api call');
    
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    }
    return this.http.postservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,true,header) 
  }
  getNotes(){
    console.log(this.token);
    let header={
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization':this.token
      })
    } 
    return this.http.getservice('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',true,header) 
  }
}
