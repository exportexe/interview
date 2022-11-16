import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionsTableComponent } from './subscriptions-table.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SubscriptionsTableComponent },
    ]),
  ],
  declarations: [SubscriptionsTableComponent],
})
export class SubscriptionsTableModule {}
