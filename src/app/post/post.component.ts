import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {

  private postService = inject(PostService)
  posts : any =[]

  // ngoninit is lifecycle hook.
  ngOnInit(): void {
      this.loadPosts()
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

  loadPosts(){
    this.postService.getPosts().subscribe({
      next:(posts  :any) =>{
        this.posts = posts;
        console.log('Post fetched',posts)
      },
      error:(error)=>{
        console.log('Error fetching posts',error)
      }
    })
  }
}
