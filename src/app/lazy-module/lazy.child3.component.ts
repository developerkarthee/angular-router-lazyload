import { Component, Input } from "@angular/core";

@Component({
  selector: "child3",
  template: `
    <h1>child3</h1>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class LazyChild3Component {}
