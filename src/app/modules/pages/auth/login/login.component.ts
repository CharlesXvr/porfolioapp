import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '@app/shared/models/login-user';
import { AuthService } from '@app/shared/services/auth.service';
import { TokenService } from '@app/shared/services/token.service';
import { ToastrService } from 'ngx-toastr';

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
  user : String[] = [];
  errMsj: string;

  constructor(
    private tokenService:TokenService,
    private authService:AuthService,
    private router:Router,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
      this.user = this.tokenService.getCurrentUserInfo();
    }
  }
  onLogin(): void {
    this.userLogin = new LoginUser(this.userEmail, this.password);
    this.authService.login(this.userLogin).subscribe(
      data => {
        this.isLogged = true;

        this.tokenService.setToken(data.token);
        this.tokenService.setEmail(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.tokenService.setCurrentUserInfo(data.user);
        this.roles = data.authorities;
        this.toastr.success('Bienvenido ' + data.email, 'OK', {
          timeOut: 3000, positionClass: 'toast-top-center'
        });
        this.router.navigate(['/home'])
        .then(() => {
          window.location.reload();
        });
        

      },
      err => {
        this.isLogged = false;
        this.errMsj = err.error.message;
        this.toastr.error(this.errMsj, 'Fail', {
          timeOut: 3000,  positionClass: 'toast-top-center',
        });
        // console.log(err.error.message);
      }
    );
  }
}
