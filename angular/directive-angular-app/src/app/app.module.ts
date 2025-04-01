import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { SwitchComponent } from './switch/switch.component';
import { IfComponent } from './if/if.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    SwitchComponent,
    IfComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
