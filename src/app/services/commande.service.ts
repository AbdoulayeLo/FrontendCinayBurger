import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commande} from "../model/commande";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getAllCommandes():Observable<Commande[]>{
    return this.httpClient.get<Commande[]>('http://127.0.0.1:8000/api/commandes');
  }
  AjouterCommande(commande:any){
    return this.httpClient.post('http://127.0.0.1:8000/api/commandes',commande);
  }

  validerCommande(id: number) {
    // Appel à l'API pour valider la commande
    return this.httpClient.post('http://127.0.0.1:8000/api/commandes/valider/'+id, {});
  }

  envoyerEmail(id: number) {
    return this.httpClient.post('http://127.0.0.1:8000/api/commandes/envoyer-email/'+id, {});
  }


  // validerCommande(id: number) {
  //   // Appel à l'API pour valider la commande
  //   this.httpClient.post(`/api/commandes/valider/${id}`, {})
  //     .subscribe(response => {
  //       // Envoi de l'email après avoir validé la commande
  //       this.envoyerEmail(id).subscribe(emailResponse => {
  //         console.log('Commande validée et email envoyé');
  //       });
  //     });
  // }
  //
  // envoyerEmail(id: number) {
  //   return this.httpClient.post(`/api/commandes/envoyer-email/${id}`, {});
  // }
}
