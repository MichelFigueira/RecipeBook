import { EventEmitter, Injectable } from '@angular/core';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Egg', 4)
      ]
    ),
    new Recipe(
      'A Other Recipe',
      'This is simply a test',
      'https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 9)
      ]
    )
  ];

  constructor(private shoppingService: ShoppingService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
}
