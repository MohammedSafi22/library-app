import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-reactive-newslatter',
  templateUrl: './reactive-newslatter.component.html',
  styleUrls: ['./reactive-newslatter.component.css']
})
export class ReactiveNewslatterComponent implements OnInit {
  emailFrm: FormGroup;
  nameFrm: FormGroup;

  constructor() {
    this.emailFrm = new FormGroup({
          email: new FormControl('',[
            Validators.email,
            Validators.required,
            Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
          ]),

    });
    this.nameFrm= new FormGroup({
      name: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ])
    })

   }

  ngOnInit(): void {

  }
  onFormSubmit(){
      console.log(this.emailFrm.controls['email'].errors)
  }

  get email(){
    return this.emailFrm.get('email');
  }
  get name(){
    return this.nameFrm.get('name');
  }

}
