
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private API = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient : HttpClient) { }

  getAllMessages(){
    return ['Message 1' , 'Message 2' , 'Message 3']
  }

  getAPIDetails():Observable<any[]>{
    return this.httpClient.get<any[]>(this.API);
  }
}
