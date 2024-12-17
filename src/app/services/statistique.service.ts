// services/statistique.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Burger } from '../model/burger';
import { Commande } from '../model/commande';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private burgers: Burger[] = [
    // Ajoute ici des burgers fictifs ou récupère-les depuis une API
  ];

  private commandes: Commande[] = [
    // Ajoute ici des commandes fictives ou récupère-les depuis une API
    {
      id: 1,
      client: 'Jean Dupont',
      dateCommande: new Date('2024-08-01'),
      montantTotal: 45.50,
      etat: 'En cours',
      burger_id: 1,
      quantite: 2,
      prenom:'lo',
      nom:'lo',
      email:'lo',
      telephone:'775553267',
      client_id:1
    },
    {
      id: 2,
      client: 'Jean Dupont',
      dateCommande: new Date('2024-08-01'),
      montantTotal: 45.50,
      etat: 'En cours',
      burger_id: 1,
      quantite: 2,
      prenom:'lo',
      nom:'lo',
      email:'lo',
      telephone:'775553267',
      client_id:1
    },
  ];

  getBurgers(): Observable<Burger[]> {
    return of(this.burgers);
  }

  getCommandes(): Observable<Commande[]> {
    return of(this.commandes);
  }
}
