import { createAction, props } from '@ngrx/store';
import { User } from '../user-selector.model';

const USER_SELECTOR = '[USER SELECTOR]';

export const userSelectorLoadUsers = createAction(`${USER_SELECTOR} LOAD_USERS`);

export const userSelectorLoadUsersSuccess = createAction(
  `${USER_SELECTOR} LOAD_USERS_SUCCESS`,
  props<{ users: User[] }>()
);
