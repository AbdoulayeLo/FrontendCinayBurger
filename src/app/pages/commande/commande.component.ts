import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../services/commande.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {BurgerComponent} from "../burger/burger.component";
import {Burger} from "../../model/burger";
import {Commande} from "../../model/commande";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {HttpClient} from "@angular/common/http";
import Swal from "sweetalert2";

@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatLabel,
    NgIf,
    ReactiveFormsModule,
    NgClass,
    NgForOf
  ],
  templateUrl: './commande.component.html',
  styleUrl: './commande.component.scss'
})
export class CommandeComponent implements OnInit{
  tabCommandes: Commande[] = [];

  ngOnInit(): void {
    this.getCommande()
  }
   constructor(
     private commandeService:CommandeService,
     private formBuilder : FormBuilder,
     private httpClient:HttpClient) {
  }


  getCommande(){
    this.commandeService.getAllCommandes().subscribe(
      (data:Commande[]) => {
        this.tabCommandes=data;
        console.log(this.tabCommandes);
      },
    (error)=>{
      console.log(error())}
    )
  }

  validerCommande(id: number) {
    this.commandeService.validerCommande(id).subscribe(response => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Burger Ajouter avec success",
        showConfirmButton: false,
        timer: 2500
      });
      this.getCommande()

      });
  }


  envoyerEmail(id: number) {
    // Envoi de l'email après avoir validé la commande
    this.commandeService.envoyerEmail(id).subscribe(emailResponse => {
      console.log('Commande validée et email envoyé');
    });
  }
}
