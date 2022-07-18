import { ActionReducerMap } from '@ngrx/store';

import * as fromShopping from '../components/shopping/store/shopping.reducer';
import * as fromAuth from '../components/auth/store/auth.reducer';

export interface AppState {
  shopping: fromShopping.State;
  auth: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shopping: fromShopping.shoppingReducer,
  auth: fromAuth.authReducer
};
