import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './recipes.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesService } from './recipes.service';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecipesComponent
  ],
  providers: [
    RecipesService
  ]
})
export class RecipesModule { }
