import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LazyChild2Component } from "./laz1.child2.component";
import { LazyChild3Component } from "./lazy.child3.component";

const routes: Routes = [
  {
    path: "",
    component: LazyChild2Component
  },
  {
    path: "",
    component: LazyChild3Component,
    outlet: "test"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule {}
