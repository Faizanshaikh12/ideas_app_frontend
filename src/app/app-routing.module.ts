import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'ideas', loadChildren: './features/idea/idea.module#IdeaModule' },
  { path: 'users', loadChildren: './features/user/user.module#UserModule' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
