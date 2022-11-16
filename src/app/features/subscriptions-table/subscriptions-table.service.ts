import { Injectable } from '@angular/core';
import { Observable, of, delay, tap } from 'rxjs';
import { SUBSCRIPTIONS } from '../../stubs';
import { UserSubscription } from './subscriptions-table.model';

@Injectable()
export class SubscriptionsTableService {
  public getSubscriptions(): Observable<UserSubscription[]> {
    return of(SUBSCRIPTIONS).pipe(delay(500), tap(console.log));
  }
}
