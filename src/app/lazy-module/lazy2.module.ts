import { NgModule } from "@angular/core";
import { LazyChild2Component } from "./laz1.child2.component";
import { LazyChild1Component } from "./lazy-child1.component";
import { LazyComponent } from "./lazy.component";
import { Lazy2RoutingModule } from "./lazy2.routing.module";

@NgModule({
  imports: [Lazy2RoutingModule],
  declarations: [LazyChild1Component],
  exports: [LazyChild1Component]
})
export class Lazy2Module {}
