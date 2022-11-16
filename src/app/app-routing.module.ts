import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () =>
          import('./features/user-selector/user-selector.module').then(
            (m) => m.UserSelectorModule
          ),
      },
      {
        path: 'subscriptions',
        loadChildren: () =>
          import(
            './features/subscriptions-table/subscriptions-table.module'
          ).then((m) => m.SubscriptionsTableModule),
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
