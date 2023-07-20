import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cicd';

  private promise = new Promise(() => {});

  constructor(private router: Router) {
    this.example();
  }

  private example(): void {}
}
