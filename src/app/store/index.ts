import { ActionReducerMap } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { AuthEffects } from '../store/effects/auth.effect';

import { authReducer, AuthState } from '../store/reducers/auth.reducer';
import { errorReducer, ErrorState } from '../store/reducers/errors.reducer';
import {RouterStateUrl} from './reducers/router.reducer';

export const effects = [AuthEffects];

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  error: errorReducer,
  router: fromRouter.routerReducer
};

export interface AppState {
  auth: AuthState;
  error: ErrorState;
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
