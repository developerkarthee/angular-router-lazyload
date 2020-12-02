import { Component, VERSION } from "@angular/core";

@Component({
  selector: "lazy-app",
  template: `
    I am lazy component
    <router-outlet name="test"></router-outlet>
    <router-outlet></router-outlet>
  `
})
export class LazyComponent {
  name = "Angular " + VERSION.major;
}
