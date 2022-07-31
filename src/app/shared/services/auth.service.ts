import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDTO } from '../models/jwt-dto';
import { LoginUser } from '../models/login-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'https://pacific-retreat-26374.herokuapp.com/auth/';

  constructor(private httpClient: HttpClient) { }

  public newUser(newUser:NewUser):Observable<any> {
    return this.httpClient.post<any>(this.authUrl + 'nuevo', newUser);
  }
  public login(LoginUser:LoginUser):Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authUrl + 'login', LoginUser);
  }
}
