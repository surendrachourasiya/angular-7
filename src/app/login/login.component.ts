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
  errorMsg = '';

  constructor(private api: ApiService, private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.errorMsg = '';
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onLogin() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    let url = 'https://testwallet.angelium.net/api/jwt/api-token-auth/';

    this.http.post(url, this.loginForm.value)
      .subscribe(
        resp => {
          if (resp['token']) {
            this.api.setToken(resp['token']);
            this.router.navigateByUrl('/home');
          } else {
            this.errorMsg = resp['user']
          }
        }, err => {
          this.errorMsg = err.error;
        });
  }

}
