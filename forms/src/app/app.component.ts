import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form', {static: false}) form: NgForm;
  defaultOption = 'pet';
  answer = '';
  submit = false;
  genders = ['male', 'female'];
  defaultGende = 'female';

  user = {
    name: '',
    mail: '',
    question: '',
    answer: '',
    gender: ''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // })

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  // onSubmit(form: NgForm) {
  //   console.log('Submitted!', form);
  // }

  onSubmit() {
    const data = this.form.value
    this.submit = true;
    this.user.name = data.userData.username;
    this.user.mail = data.userData.email;
    this.user.question = data.secret;
    this.user.answer = data.questionAnswer;
    this.user.gender = data.gender;
    console.log(this.form)

    // reset form
    this.form.reset()
  }
}
