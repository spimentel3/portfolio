import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortButtonComponent } from './components/sort-button/sort-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SortButtonComponent
  ],
  declarations: [SortButtonComponent]
})
export class SharedModule{ }
