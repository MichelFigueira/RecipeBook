import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    DropdownDirective
  ]
})
export class SharedModule { }
