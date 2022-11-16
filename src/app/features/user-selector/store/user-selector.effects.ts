import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { User } from '../user-selector.model';
import { UserSelectorService } from '../user-selector.service';
import {
  userSelectorLoadUsers,
  userSelectorLoadUsersSuccess,
} from './user-selector.actions';

@Injectable()
export class UserSelectorEffects {
  constructor(
    private appActions$: Actions,
    private userSelectorService: UserSelectorService
  ) {}

  public readonly userSelectorLoadUsersEffect = createEffect(() => {
    return this.appActions$.pipe(
      ofType(userSelectorLoadUsers),
      switchMap(() => this.userSelectorService.getUsers()),
      map((users: User[]) => userSelectorLoadUsersSuccess({ users }))
    );
  });
}
