import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UiModule} from '../../ui.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {userReducer} from './state/user.reducer';
import {UserEffects} from './state/user.effects';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path: '', component: UsersComponent}
];


@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('users', userReducer),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
