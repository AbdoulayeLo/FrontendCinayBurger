export class Commande {
  id!:number;
  prenom!:string;
  nom!:string;
  telephone!:string;
  email!:string;
  montantTotal!:number;
  etat!:string;
  quantite!:number;
  client_id!:number;
  burger_id!:number;
  dateCommande!:Date;
  client:any
}
