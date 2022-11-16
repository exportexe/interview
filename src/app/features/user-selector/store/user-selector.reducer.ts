import { Action, createReducer, on } from '@ngrx/store';
import { userSelectorLoadUsersSuccess } from './user-selector.actions';
import {
  userSelectorInitialState,
  UserSelectorState,
} from './user-selector.state';

const userSelectorFeatureReducer = createReducer(
  userSelectorInitialState,
  on(
    userSelectorLoadUsersSuccess,
    (state, action): UserSelectorState => ({ ...state, users: action.users })
  )
);

export function userSelectorReducer(
  state: UserSelectorState | undefined,
  action: Action
): UserSelectorState {
  return userSelectorFeatureReducer(state, action);
}
