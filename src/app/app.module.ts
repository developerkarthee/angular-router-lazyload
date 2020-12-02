import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { AppRoutingModule } from "./app.routing.module";
import { Module1Component } from "./modules/module1.component";
import { Module2Component } from "./modules/module2.component";
import { LazyModule } from "./lazy-module/lazy.module";

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [
    AppComponent,
    HelloComponent,
    Module1Component,
    Module2Component
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
