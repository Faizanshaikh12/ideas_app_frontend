
import { Idea } from '../../../models/idea';
import { Entity } from '../../../models/entity';
import * as Store from '../../../store';

export interface IdeaState {
  ideas: Entity<Idea>;
  page: number;
  loading: boolean;
  loaded: boolean;
}

export interface AppState extends Store.AppState {
  ideas: IdeaState;
}

export * from './idea.action';
export * from './idea.effects';
export * from './idea.reducer';
