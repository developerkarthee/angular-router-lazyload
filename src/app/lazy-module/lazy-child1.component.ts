import { Component, Input } from '@angular/core';

@Component({
  selector: 'child1',
  template: `<h1>child1</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class LazyChild1Component  {
}
