import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { USERS } from '../../stubs';
import { User } from './user-selector.model';

@Injectable()
export class UserSelectorService {
  public getUsers(): Observable<User[]> {
    return of(USERS).pipe(delay(700), tap(console.log));
  }
}
