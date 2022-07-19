import { ActionReducerMap } from '@ngrx/store';

import * as fromShopping from '../components/shopping/store/shopping.reducer';
import * as fromAuth from '../components/auth/store/auth.reducer';
import * as fromRecipes from '../components/recipes/store/recipe.reducer';

export interface AppState {
  shopping: fromShopping.State;
  auth: fromAuth.State;
  recipes: fromRecipes.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shopping: fromShopping.shoppingReducer,
  auth: fromAuth.authReducer,
  recipes: fromRecipes.recipeReducer
};
