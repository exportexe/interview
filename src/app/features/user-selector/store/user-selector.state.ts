import { User } from '../user-selector.model';

export const USER_SELECTOR_STATE_NAME = 'userSelectorState';

export interface UserSelectorState {
  readonly users: User[];
}

export const userSelectorInitialState: UserSelectorState = {
  users: null,
};
