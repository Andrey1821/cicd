import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cicd';
  // private proxy = new Proxy<any>(({
  //   getValue(): any {
  //     const {getValue, ...value} = {...this} as any;
  //     return value;
  //   }
  // } as any), {
  //   set: (target, prop, value) => {
  //     target[prop] = value;
  //     this.proxySetEffect();
  //     return true;
  //   },
  //   get(target: any, prop: string | symbol): any {
  //     const value = target[prop];
  //     if(typeof value === 'function') {
  //       return value.bind(target);
  //     }
  //     return target[prop];
  //   }
  // })

  private promise = new Promise(() => {});

  constructor(private router: Router) {
    this.example();
  }

  private example(): void {
    // setTimeout(() => this.proxy.age = 4, 3000)
  }

  private proxySetEffect(): void {
    // console.log(this.proxy.getValue());
    // console.log(this.proxy.age);
  }
}
