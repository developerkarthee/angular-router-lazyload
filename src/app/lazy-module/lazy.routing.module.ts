import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LazyChild3Component } from "./lazy.child3.component";
import { LazyComponent } from "./lazy.component";

const routes: Routes = [
  {
    path: "",
    component: LazyComponent,
    children: [
      {
        path: "projects",
        loadChildren: () => import("./lazy2.module").then(m => m.Lazy2Module)
      },
      {
        path: "applications",
        component: LazyChild3Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule {}
