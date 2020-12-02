import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { Module1Component } from './modules/module1.component';
import { Module2Component } from './modules/module2.component';

const routes: Routes = [
  { path: 'module1', component: Module1Component },
  { path: 'module2', component: Module2Component },
  { path : 'lazy', loadChildren: () => import('./lazy-module/lazy.module').then(m => m.LazyModule)}
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }