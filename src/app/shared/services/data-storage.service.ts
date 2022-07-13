import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';

import { Recipe } from 'src/app/components/recipes/recipes.model';
import { RecipesService } from 'src/app/components/recipes/recipes.service';

const API_URL = 'https://recipebook-66db9-default-rtdb.firebaseio.com/recipes.json';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(
    private http: HttpClient,
    private recipeService: RecipesService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(API_URL, recipes).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(API_URL)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
        });
      }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      )
  }

}
