import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../clases/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/v1/users";

  constructor(private httpClient : HttpClient) {

   }
   //ESTE METODO SE COMUNICA CON EL BACK 
   getUsersList():Observable<Users[]>{
    return this.httpClient.get<Users[]>(`${this.baseUrl}`);
   }
   addUser(user:Users) : Observable<Object> {
      return this.httpClient.post(`${this.baseUrl}`, user);
   }
   deleteUser(id:number) : Observable<Object> {
      return this.httpClient.delete(`${this.baseUrl}/${id}`)
   }
   updateUser(id:number,user:Users) : Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,user);
    }
    getUserById(id:number):Observable<Users>{
      return this.httpClient.get<Users>(`${this.baseUrl}/${id}`);
    }
  
}
