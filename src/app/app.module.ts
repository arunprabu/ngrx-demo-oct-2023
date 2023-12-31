import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './my-counter/my-counter.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './my-counter/counter.reducer';

// Let's create the store here
const store = {
  counter: counterReducer
};

@NgModule({
  declarations: [AppComponent, MyCounterComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot(store)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
