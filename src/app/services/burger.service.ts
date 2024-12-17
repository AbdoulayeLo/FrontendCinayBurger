import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Burger} from "../model/burger";

@Injectable({
  providedIn: 'root'
})
export class BurgerService {

  constructor(private httpClient: HttpClient) { }
  public apiUrl = 'http://localhost:8000/api/burgers/';

  getAllBurgers():Observable<Burger[]>{
    return this.httpClient.get<Burger[]>(this.apiUrl);
  }
  getBurgerById(id:any){
    return this.httpClient.get<Burger>('http://localhost:8000/api/burgers/'+id);
  }
  ajoutBurger(burger:any):Observable<any>{
    return this.httpClient.post<any>('http://localhost:8000/api/burgers/',burger);
  }
}
