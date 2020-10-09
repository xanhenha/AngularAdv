import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  show = {
    recipe: true,
    shopping: false
  }

  identifyPage(event) {
    if(event === 'recipe') {
      this.show.recipe = true;
      this.show.shopping = false;
    } else {
      this.show.recipe = false;
      this.show.shopping = true;
    }

    console.log(`Header mandou abrir ${event}`)
  }

}
