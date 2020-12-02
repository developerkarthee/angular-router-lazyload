import { Component, Input } from "@angular/core";

@Component({
  selector: "child2",
  template: `
    <h1>child2</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class LazyChild2Component {}
