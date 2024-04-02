import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';

export const routes: Routes = [

  {path : '' , pathMatch:'full' , redirectTo:'postdata'},
  {path: 'postdata' , component:PostComponent},

];
