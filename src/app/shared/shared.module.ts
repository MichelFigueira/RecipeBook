import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './directives/dropdown.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    DropdownDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    DropdownDirective
  ]
})
export class SharedModule { }
