import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUsers, userSelectorLoadUsers } from './store';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSelectorComponent {
  users$ = this.store.select(selectUsers);

  constructor(private store: Store) {}

  fetchUsers(): void {
    this.store.dispatch(userSelectorLoadUsers());
  }
}
