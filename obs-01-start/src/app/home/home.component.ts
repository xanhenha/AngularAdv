import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstObs: Subscription

  constructor() { }

  ngOnInit() {

    const customObs = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      } ,1000);
    });

    this.firstObs = customObs.subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy(): void {
    this.firstObs.unsubscribe();
  }

}
