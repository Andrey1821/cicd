import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cicd';
  constructor(private router: Router) {}

  private a(a: number, b: number): void {
    console.log(1111);
  }
}
