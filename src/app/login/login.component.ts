import {Component, OnInit} from '@angular/core';
import {ApiService} from '../shared/service/api.service';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(private api: ApiService, private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onLogin() {
    this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
    let url = 'https://testwallet.angelium.net/api/jwt/api-token-auth/';

    this.http.post('https://testwallet.angelium.net/api/jwt/api-token-auth/', this.loginForm.value)
      .subscribe(
        resp => {
          if (resp['token']) {
            this.api.setToken(resp['token']);
            this.router.navigateByUrl('/dashboard');
          }
        }, r => {
          alert(r.error.error);
        });
  }

}
