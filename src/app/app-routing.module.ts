import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { HelloComponent } from './hello/hello.component';

const routes: Routes = [
  { path: '', component: TestComponent, pathMatch: 'full' },
  { path: 'test', component: Test1Component },
  { path: 'hello', component: HelloComponent },
  {
    path: 'ex',
    loadChildren: () => import('./lazy-load-example/lazy-load-example.module').then((m) => m.LazyLoadExampleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
