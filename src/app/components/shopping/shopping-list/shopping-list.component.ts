import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangeSub: Subscription;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.ingredients = this.shoppingService.getIngredients();
    this.igChangeSub = this.shoppingService.ingredientsChanged
    .subscribe(
      (ingrdients: Ingredient[]) => {
        this.ingredients = ingrdients;
      }
      )
    }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
