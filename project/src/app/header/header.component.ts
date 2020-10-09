import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  @Output() choosen = new EventEmitter<string>();

  showMenu(menu) {
    this.choosen.emit(menu);
    console.log(menu)
  }

}