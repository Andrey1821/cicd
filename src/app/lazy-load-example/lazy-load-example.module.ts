import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyLoadExampleComponent } from './lazy-load-example.component';
import { LazyLoadExampleRoutingModule } from './lazy-load-example-routing.module';

@NgModule({
  declarations: [LazyLoadExampleComponent],
  imports: [CommonModule, LazyLoadExampleRoutingModule]
})
export class LazyLoadExampleModule {}
