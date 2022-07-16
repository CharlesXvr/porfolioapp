import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '@app/shared/models/login-user';
import { AuthService } from '@app/shared/services/auth.service';
import { TokenService } from '@app/shared/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  userLogin : LoginUser;
  userEmail : string;
  password : string;
  roles : String[] = [];
  constructor(
    private tokenService:TokenService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

}
