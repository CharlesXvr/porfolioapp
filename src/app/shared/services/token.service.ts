import { Injectable } from '@angular/core';
import { Users } from '../clases/users';

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const AUTH_KEY = 'AuthAuthorities';
const USER = 'user'
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles:Array<String> = [];
  users:Array<String> = [];


  constructor() { }

  public setToken(token:string):void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }
  public getToken() : string {
    return sessionStorage.getItem(TOKEN_KEY)!;
  }

  public setEmail(email:string):void {
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY, email);
  }
  public getEmail() : string {
    return sessionStorage.getItem(EMAIL_KEY)!;
  }

  public setAuthorities(authorities: string[]): void {
    window.sessionStorage.removeItem(AUTH_KEY);
    window.sessionStorage.setItem(AUTH_KEY, JSON.stringify(authorities));
  }
  public getAuthorities(): String[] {
    this.roles = [];
    if (sessionStorage.getItem(AUTH_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTH_KEY)!).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }
  public setCurrentUserInfo(user: string[]):void {
    window.sessionStorage.removeItem(USER);
    window.sessionStorage.setItem(USER, JSON.stringify(user));
  }
  public getCurrentUserInfo(): String[] {
    this.users = [];
    if (sessionStorage.getItem(USER)) {
      JSON.parse(sessionStorage.getItem(USER)!).forEach(user => {
        this.users.push(user.user);
      });
    }
    return this.users;
  }


  public logOut(): void {
    window.sessionStorage.clear();
  }

}
