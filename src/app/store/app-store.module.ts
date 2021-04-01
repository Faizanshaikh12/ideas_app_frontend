import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ActionReducerMap, StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {errorReducer, ErrorState} from './reducers/errors.reducer';

export interface AppState{
  error: ErrorState;
}

export const reducers: ActionReducerMap<AppState> = {
  error: errorReducer
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument(),
  ]
})
export class AppStoreModule {
}
