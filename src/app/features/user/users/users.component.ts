import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../models/user';
import {AppState} from '../state';
import {Store} from '@ngrx/store';
import {LoadUsers} from '../state/user.action';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: Observable<User[]>

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new LoadUsers());
    this.users = this.store.select(state => state.users.users);
  }

}
