import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {AuthResponse} from "../model/auth-response";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  redirectUrl: string= "/login";
isAuth():boolean{
  const token  = localStorage.getItem('token');
  if(token){
    return true
  }else{
    return false;
  }
}

  constructor
  (
    private httpClient:HttpClient,
  ) {
  }
// private getAuthHeaders(){
//     const token = this.getAuthToken();
//     return new HttpHeaders().set('Authorization', `Bearer ${token}`);
// }

  getLogin(request:any):Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>("http://127.0.0.1:8000/api/login",request);
  }
  getLogout(request:any) {
    return this.httpClient.post("http://127.0.0.1:8000/api/logout",request);
  }

  isAuthenticated(): boolean {
    // Vérifiez si le token est présent dans le localStorage ou selon votre logique d'authentification
    return !!localStorage.getItem('token');
  }

}
