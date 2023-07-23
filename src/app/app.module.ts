import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet } from '@angular/router';
import { Test1Component } from './test1/test1.component';

@NgModule({
  declarations: [AppComponent, TestComponent, Test1Component],
  imports: [BrowserModule, AppRoutingModule, RouterOutlet],
  bootstrap: [AppComponent]
})
export class AppModule {}
