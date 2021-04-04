import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { tap, mergeMap, catchError, map, withLatestFrom } from 'rxjs/operators';

import { ApiService } from '../../../services/api.service';
import * as fromError from '../../../store/actions/errors.action';
import * as fromIdea from './idea.action';
import { AppState } from '.';
import { Router } from '@angular/router';
import {AddError} from '../../../store/actions/errors.action';
import {LoadIdeasSuccess} from './idea.action';

  @Injectable()
  export class IdeaEffects {
  constructor(
    private store: Store<AppState>,
    private action$: Actions,
    private api: ApiService
  ) {}

//   @Effect()
//   loadIdeas$: Observable<Action> = this.action$.pipe(
//     ofType<fromIdea.LoadIdeas>(fromIdea.IdeaActions.LOAD_IDEAS),
//     tap(() => this.store.dispatch(new fromError.RemoveError())),
//     mergeMap(action =>
//       this.api.getIdeas().pipe(
//         map(ideas => new fromIdea.LoadIdeasSuccess(ideas)),
//         catchError(err => of(new fromError.AddError(err)))
//       )
//     )
//   );
// }

@Effect()
loadIdeas$: Observable<AddError | LoadIdeasSuccess> = this.action$.pipe(
  ofType<fromIdea.LoadIdeas>(fromIdea.IdeaActions.LOAD_IDEAS),
  tap(() => this.store.dispatch(new fromError.RemoveError())),
  mergeMap(() =>
    this.api.getIdeas().pipe(
      map(ideas => new fromIdea.LoadIdeasSuccess(ideas)),
      catchError(err => of(new fromError.AddError(err.error)))
    )
  )
);
}
