import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import {
  UserSelectorEffects,
  userSelectorReducer,
  USER_SELECTOR_STATE_NAME,
} from './store';
import { UserSelectorComponent } from './user-selector.component';
import { UserSelectorService } from './user-selector.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: UserSelectorComponent }]),
    StoreModule.forFeature(USER_SELECTOR_STATE_NAME, userSelectorReducer),
    EffectsModule.forFeature([UserSelectorEffects]),
  ],
  declarations: [UserSelectorComponent],
  providers: [UserSelectorService],
})
export class UserSelectorModule {}
