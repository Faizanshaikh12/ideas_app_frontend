import {Component, OnInit} from '@angular/core';
import {AppState} from './store';
import {Store} from '@ngrx/store';
import {AddError} from './store/actions/errors.action';
import {LoginUser, SetInitialUser} from './store/actions/auth.action';
import {AuthDto} from './models/auth';
import {AuthService} from './services/auth.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new SetInitialUser());
  }
}
