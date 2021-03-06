import {ErrorActions, Actionss} from '../actions/errors.action';


export interface ErrorState {
  error: any;
}

const initialState: ErrorState = {
  error: null
};

export const errorReducer: (state: ErrorState, action: Actionss) => ErrorState = (
  state = initialState,
  action: Actionss
) => {
  switch (action.type) {
    case ErrorActions.ADD_ERROR:
      return { ...state, error: action.payload };
    case ErrorActions.REMOVE_ERROR:
      return { ...state, error: null };
    default:
      return state;
  }
};
