import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styles: [],
})
export class MyCounterComponent {
  count$: Observable<number>;

  constructor(private store: Store<{counter: number}>) {
    // Let's get the counter's intial value from the store 
    console.log(store);
    this.count$ = this.store.select('counter');
    console.log(this.count$); // this is an observable
    // we should use async pipe in the template
    // so that we don't need to subscribe or unsubscribe
  }

  handleIncrement() {
    console.log('Increment');
    // dispatch an action Increment
    // the component that wants to update store must dispatch an action 
    this.store.dispatch(increment());
  }

  handleDecrement() {
    console.log('Decrement');
    this.store.dispatch(decrement());
  }

  handleReset() {
    console.log('Reset');
    this.store.dispatch(reset());
  }
}
