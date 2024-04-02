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

  private http = inject(HttpClient)
  posts : any =[]

  // ngoninit is lifecycle hook.
  ngOnInit(): void {
      this.loadPosts()

  }
  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      (res:any)=>{
        this.posts = res
      }
    )
  }
  // fetchPosts(){
  //   this.postService.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
  //   .subscribe((posts:any)=>{
  //     this.posts = posts
  //   })
  // }
  // loadPosts(){
  //   this.postService.getPosts().subscribe((posts:any)=>{
  //     console.log(posts)
  //     this.posts = posts
  //   });
  // }
}
