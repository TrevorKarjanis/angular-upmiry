import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import './hello-element';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
      const el = createCustomElement(AppComponent, { injector: this.injector });
      customElements.define('my-app', el);
  }

  ngDoBootstrap() { }
}
