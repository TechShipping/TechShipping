import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HideHeaderDirective } from '../directives/hide-header.directive';

@NgModule({
  declarations: [HideHeaderDirective],
  exports: [HideHeaderDirective],
  imports: [CommonModule],
})
export class SharedModule {}
