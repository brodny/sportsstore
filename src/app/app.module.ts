import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, StoreModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pl-PL', }],
  bootstrap: [AppComponent]
})
export class AppModule { }
