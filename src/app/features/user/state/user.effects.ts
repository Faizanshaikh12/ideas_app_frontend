import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AppState} from './index';
import {Store} from '@ngrx/store';
import {ApiService} from '../../../services/api.service';
import {Observable, of} from 'rxjs';
import {Actionss, LoadUsers, LoadUsersSuccess, UserActions} from './user.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import * as fromUser from './user.action';
import * as fromError from '../../../store/actions/errors.action';
import {AddError} from '../../../store/actions/errors.action';

@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private api: ApiService
  ) {}

  @Effect()
  loadUsers$: Observable<AddError | LoadUsersSuccess> = this.action$.pipe(
    ofType<fromUser.LoadUsers>(fromUser.UserActions.LOAD_USERS),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap(() =>
      this.api.getUsers().pipe(
        map(users => new fromUser.LoadUsersSuccess(users)),
        catchError(err => of(new fromError.AddError(err.error)))
      )
    )
  );
}
