import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { LazyComponent } from "./lazy.component";
import { LazyRoutingModule } from "./lazy.routing.module";

@NgModule({
  imports: [LazyRoutingModule],
  declarations: [LazyComponent],
  exports: [LazyComponent]
})
export class LazyModule {}
