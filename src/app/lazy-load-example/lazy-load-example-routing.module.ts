import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadExampleComponent } from './lazy-load-example.component';

const routes: Routes = [{ path: '', component: LazyLoadExampleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class LazyLoadExampleRoutingModule {}
