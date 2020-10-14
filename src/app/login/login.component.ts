import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
// data;

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
             ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', [Validators.required]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit = () => {
      var userData = JSON.parse(localStorage.getItem('user'));
      console.log(userData);
      
      if(userData){
      userData.map((item) => {
        var data = {
          username: this.loginForm.value.username,
          password: this.loginForm.value.password,
        }
        console.log("map", item.username, "map", data.username);
          if(item.username === data.username && item.password === data.password){
            localStorage.setItem('loginUser', data.username);
            this.authService.isAuthenticated();
            this.router.navigate(['/welcome']);
          }
      })
    }
    }

  }