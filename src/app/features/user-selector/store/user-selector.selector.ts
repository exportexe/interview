import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  UserSelectorState,
  USER_SELECTOR_STATE_NAME,
} from './user-selector.state';

const selectUserSelectorState = createFeatureSelector<UserSelectorState>(
  USER_SELECTOR_STATE_NAME
);

export const selectUsers = createSelector(
  selectUserSelectorState,
  (state) => state.users
);
