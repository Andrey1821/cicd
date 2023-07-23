import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';

const routes: Routes = [
  { path: '', component: TestComponent, pathMatch: 'full' },
  { path: 'test', component: Test1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
