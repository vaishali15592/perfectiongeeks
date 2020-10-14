import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  arrData = [];
  constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    const oldData = JSON.parse(localStorage.getItem('user'));
    if (oldData && Array.isArray(oldData))
    {
      for(let i of oldData){
        const x={username: i.username, password: i.password}
        this.arrData.push(x)
      }
    }


    this.registerForm = this.formbuilder.group({
      username: ["", [Validators.required , Validators.minLength(3)]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required]
    })
  }

  get f() { return this.registerForm.controls}

  onSubmit = () => {
    const data = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password,

    }
    console.log("form data", data);
    if(this.registerForm.valid){
    this.arrData.push(data);
    localStorage.setItem('user', JSON.stringify(this.arrData));
    this.router.navigate(['/login']);
  }
}

}
