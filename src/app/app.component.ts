import {Component, OnInit} from '@angular/core';
import {AppState} from './store';
import {Store} from '@ngrx/store';
import {SetInitialUser} from './store/actions/auth.action';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>, private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.store.dispatch(new SetInitialUser());
    this.store.select(state => state.error)
      .subscribe(val => this.showError(val.error));
  }

  showError(err): void {
    if (err) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error Message',
        detail: err.error || 'Internal Server error'
      });
    }
  }
}
