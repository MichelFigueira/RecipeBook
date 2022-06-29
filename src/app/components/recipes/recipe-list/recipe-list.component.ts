import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg'),
    new Recipe('A Other Recipe', 'This is simply a test', 'https://reciperie.com/wp-content/uploads/2021/11/Buckstop-West-End-Sean-Neild-Vancouver-1200x675.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
