import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { AlertComponent } from './components/alert/alert.component';
import { PlaceholderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    PlaceholderDirective,
    HeaderComponent,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    DropdownDirective,
    PlaceholderDirective,
    LoadingSpinnerComponent,
    AlertComponent
  ],
  entryComponents: [
    AlertComponent
  ]
})
export class SharedModule { }
