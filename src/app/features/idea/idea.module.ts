import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {RouterModule, Routes} from '@angular/router';
import {EffectsModule} from '@ngrx/effects';
import {UiModule} from '../../ui.module';
import { IdeasComponent } from '../idea/ideas/ideas.component';
import {IdeaEffects, ideaReducer} from './state';


const routes: Routes = [{ path: '', component: IdeasComponent }];

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('ideas', ideaReducer),
    EffectsModule.forFeature([IdeaEffects])
  ],
  declarations: [IdeasComponent],
})
export class IdeaModule { }
