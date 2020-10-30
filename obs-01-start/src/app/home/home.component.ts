import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { filter, map } from "rxjs/operators";

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
        if(count === 5)
          observer.complete();
        if(count > 3)
          observer.error(new Error('count is greater than 3!'));
        observer.next(count++);
      } ,1000);
    });

    this.firstObs = customObs.pipe( filter( (data: number) => {
      return data % 2 !== 0;
    }), map( (data: number) => {
      return 'Round: ' + (data + 1);
    }))
      .subscribe(data => {
      console.log(data);
    }, error => {
      alert(error.message);
    }, () => {
      console.log('Completed!')
    });
  }

  ngOnDestroy(): void {
    this.firstObs.unsubscribe();
  }

}
