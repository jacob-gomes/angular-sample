import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ILogin } from './login.request.model';
import { ILoginResponse } from './login.response.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  myLogin = new ILogin('userid' , 'pswd');
  loginResponse : ILoginResponse;
  loginFailed : boolean;

  ngOnInit() {

  }
  submitForm(): void {
    console.log('>>>>>>>>', this.myLogin);
    this.loginService.loginForm(this.myLogin)
    .subscribe((res) => this.loginResponse = res);

    if(this.loginResponse != null && this.loginResponse.isSuccessful == true){
      console.log("redirecting to Management page");
      localStorage.setItem("userId",this.myLogin.userId);
      localStorage.setItem("isAdmin",""+this.loginResponse.isAdmin);
      this.router.navigate(['/user']);
    }else{
      this.loginFailed = true;
    }
  }
}
