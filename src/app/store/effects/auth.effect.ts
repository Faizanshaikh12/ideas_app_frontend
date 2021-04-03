import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {AuthService} from '../../services/auth.service';
import {Observable, of} from 'rxjs';
import {Actionss, AuthActions, LoginUser, RegisterUser, SetCurrentUser, SetInitialUser} from '../actions/auth.action';
import {catchError, map, mergeMap, tap} from 'rxjs/operators';
import {User} from '../../models/user';
import {AddError} from '../actions/errors.action';
import {Store} from '@ngrx/store';
import * as fromAuth from '../actions/auth.action';
import * as fromError from '../actions/errors.action';
import {AppState} from '../index';

@Injectable()
export class AuthEffects {
  constructor(
    private action$: Actions,
    private store: Store<AppState>,
    private authService: AuthService
  ) {}

  @Effect()
  setInitialUser$: Observable<AddError | SetCurrentUser> = this.action$.pipe(
    ofType<fromAuth.SetInitialUser>(fromAuth.AuthActions.SET_INITIAL_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.SetInitialUser) =>
      this.authService.whoami().pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );

  @Effect()
  loginUser$: Observable<AddError | SetCurrentUser> = this.action$.pipe(
    ofType<fromAuth.LoginUser>(fromAuth.AuthActions.LOGIN_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.LoginUser) =>
      this.authService.auth('login', action.payload).pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );

  @Effect()
  registerUser$: Observable<AddError | SetCurrentUser> = this.action$.pipe(
    ofType<fromAuth.RegisterUser>(fromAuth.AuthActions.REGISTER_USER),
    tap(() => this.store.dispatch(new fromError.RemoveError())),
    mergeMap((action: fromAuth.RegisterUser) =>
      this.authService.auth('register', action.payload).pipe(
        map((user: User) => new fromAuth.SetCurrentUser(user)),
        catchError(err => {
          this.store.dispatch(new fromAuth.SetCurrentUser(null));
          this.authService.token = null;
          return of(new fromError.AddError(err.error));
        })
      )
    )
  );
}
