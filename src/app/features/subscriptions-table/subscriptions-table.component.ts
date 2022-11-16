import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';
import { SubscriptionsTableService } from './subscriptions-table.service';

@Component({
  selector: 'app-subscriptions-table',
  templateUrl: './subscriptions-table.component.html',
  styleUrls: ['./subscriptions-table.component.less'],
  providers: [SubscriptionsTableService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubscriptionsTableComponent {
  @HostBinding('class.subscriptions-table')
  hostClass = true;

  subscriptions$ = this.subscriptionsTableService.getSubscriptions();

  constructor(private subscriptionsTableService: SubscriptionsTableService) {}
}
