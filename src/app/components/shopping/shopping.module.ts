import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingComponent } from './shopping.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    ShoppingComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShoppingComponent
  ]
})
export class ShoppingModule { }
