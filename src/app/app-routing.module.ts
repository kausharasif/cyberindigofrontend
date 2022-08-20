import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SigncomponentComponent } from './signcomponent/signcomponent.component';
import { PostslistComponent } from './postslist/postslist.component';
 import { postslistService } from './postslist/postslist.service';
const routes: Routes = [
  { path: 'signup', component: LoginComponent },
  { path: 'login' , component: SigncomponentComponent},
  { path: 'post' , component: PostslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ postslistService ],
})
export class AppRoutingModule { }
