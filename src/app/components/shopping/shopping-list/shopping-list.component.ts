import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/models/ingredient.model';
import * as ShoppingListActions from '../store/shopping.actions'
import * as fromShopping from '../store/shopping.reducer';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Observable<{ingredients: Ingredient []}>;
  private igChangeSub: Subscription;

  constructor(
    private store: Store<fromShopping.AppState>
  ) {}

  ngOnInit() {
    this.ingredients = this.store.select('shopping');
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
