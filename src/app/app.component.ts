import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './services/message.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers : [MessageService]
})
export class AppComponent  implements OnInit{
  title = 'API_Angular';
  message : string [] =[];
  response : any[] =[];

  constructor(private messageService : MessageService){
    this.message =  messageService.getAllMessages()
  }
  // ngOnInit(){
  //   this.messageService.getAPIDetails().subscribe
  //   ((posts)=>{this.response = posts},
  //     (error :any)=>{
  //     console.log(error)
  //   })
  // }

  // next method is updated in angular 17 - Next is more powerful!
  ngOnInit():void {
      this.messageService.getAPIDetails().subscribe({
        next : (posts : any)=>{this.response = posts},
        error : (error : any)=>{console.log(error)}
      })
  }
}
