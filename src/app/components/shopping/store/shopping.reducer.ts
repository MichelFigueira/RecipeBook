import { Ingredient } from "src/app/shared/models/ingredient.model";
import * as ShoppingActions from "./shopping.actions";

export interface State {
  ingredients: Ingredient[];
  editIngredient: Ingredient;
  editIngredientIndex: number;
};

export interface AppState {
  shopping: State;
};

const initialState: State = {
  ingredients: [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ],
  editIngredient: null,
  editIngredientIndex: -1
};

export function shoppingReducer(state: State = initialState, action: ShoppingActions.ShoppingActions) {
  switch (action.type) {

    case ShoppingActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };

    case ShoppingActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };

    case ShoppingActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editIngredientIndex];
      const updateIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updateIngredients = [...state.ingredients];
      updateIngredients[state.editIngredientIndex] = updateIngredient;
      return {
        ...state,
        ingredients: updateIngredients,
        editIngredientIndex: -1,
        editIngredient: null
      };

    case ShoppingActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editIngredientIndex;
        }),
        editIngredientIndex: -1,
        editIngredient: null
      };

    case ShoppingActions.START_EDIT:
      return {
        ...state,
        editIngredientIndex: action.payload,
        editIngredient: { ...state.ingredients[action.payload] }
      };

    case ShoppingActions.STOP_EDIT:
    return {
      ...state,
      editedIngredient: null,
      editIngredientIndex: -1
    };

    default:
      return state;
  }
}
