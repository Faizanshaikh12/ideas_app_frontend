import {User} from '../../../models/user';
import * as Store from '../../../store/index';

export interface UserState {
  loading: boolean;
  loaded: boolean;
  users: User[];
  page: number;
}

export interface AppState extends Store.AppState {
  users: UserState;
}
