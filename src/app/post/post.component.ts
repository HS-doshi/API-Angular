import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  http=inject(HttpClient)
  posts : any =[]

  // ngoninit is lifecycle hook.
  ngOnInit(): void {
      this.fetchPosts()
  }
  fetchPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((posts:any)=>{
      this.posts = posts
    })
  }
}
