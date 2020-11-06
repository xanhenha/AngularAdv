import { Component, ViewChild, ɵSWITCH_COMPILE_INJECTABLE__POST_R3__ } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', {static: false}) form: NgForm;
  defaultSubs = 'adv'
  userData = {
    email: '',
    password: '',
    subscription: ''
  }

  onSubmit() {
    console.log(this.form)
    this.userData.email = this.form.value.email;
    this.userData.password = this.form.value.password;
    this.userData.subscription = this.form.value.subscription;
    console.log(this.userData);
    this.form.reset();
  }

}
