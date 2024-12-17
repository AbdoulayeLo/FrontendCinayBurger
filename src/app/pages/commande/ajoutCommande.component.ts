import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../../services/commande.service";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatLabel} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {BurgerComponent} from "../burger/burger.component";
import {Burger} from "../../model/burger";
import {Commande} from "../../model/commande";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {BurgerService} from "../../services/burger.service";
import {ActivatedRoute, Router} from "@angular/router";

// Assurez-vous d'importer le service


@Component({
  selector: 'app-commande',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardContent,
    MatLabel,
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './ajoutCommande.component.html',
  styleUrl: './commande.component.scss'
})
export class AjoutCommandeComponent implements OnInit{

   constructor(
     private commandeService:CommandeService,
     private burgerService:BurgerService,
     private formBuilder : FormBuilder,
     private activatedRoute: ActivatedRoute,
     private router:Router) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const burgerId = params['burger_id'];
      if (burgerId) {
        this.commandForm.patchValue({ burger_id: burgerId });
      }
    });

  }
  // Méthode pour obtenir la date d'aujourd'hui au format 'YYYY-MM-DD'
  private getTodayDate(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  back():void{ // Le retour a la page principal /article
    this.router.navigate(['/commande']);
  }
  commandForm=this.formBuilder.group({
    prix: [0, Validators.required],
    quantite: [0, Validators.required],
    montantTotal: ['', Validators.required],
    // montantTotal: [{ value: 0, disabled: true }],
    dateCommande: [this.getTodayDate(), Validators.required],
    burger_id: [, Validators.required],
    client: this.formBuilder.group({
      email: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      telephone: ['', Validators.required]
    }),
    etat: ['en attente', Validators.required]
  });


  addCommande(){
    this.commandeService.AjouterCommande(this.commandForm.value).subscribe(
      (data)=>{
        console.log(this.commandForm.value)
        this.back()
      },
      (error)=>{
        console.log(error)
      }
    )
  }
}
