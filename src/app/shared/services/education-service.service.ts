import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstitutosEd } from '../models/institutos-ed';
import { UserInstitutes } from '../models/user-institutes';

@Injectable({
  providedIn: 'root'
})
export class EducationServiceService {

  userInstitutesURL = 'http://localhost:8080/auth/userinstitutes/';
  InstitutesURL = 'http://localhost:8080/auth/institutes/';

  
  public getInstitute(): Observable<InstitutosEd[]> {
    return this.httpClient.get<InstitutosEd[]>(this.InstitutesURL + 'list');
  }
  public addInstitute(institute: InstitutosEd): Observable<any> {
    return this.httpClient.post<any>(this.InstitutesURL + 'add', institute);
  }


  constructor(private httpClient : HttpClient) { }

  public save(userEducation: UserInstitutes): Observable<any> {
    return this.httpClient.post<any>(this.userInstitutesURL + 'add', userEducation);
  }

  public update(id: number, userEducation: UserInstitutes): Observable<any> {
    return this.httpClient.put<any>(this.userInstitutesURL + `update/${id}`, userEducation);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.userInstitutesURL + `delete/${id}`);
  }
}
