import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {PagesModule} from "../pages.module";
import {BurgerService} from "../../services/burger.service";
import {FormBuilder, FormsModule, Validators} from "@angular/forms";
import {MatAnchor, MatButton} from "@angular/material/button";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {NgClass, NgIf} from "@angular/common";
import { ReactiveFormsModule } from '@angular/forms';
import {Burger} from "../../model/burger";


// @ts-ignore
@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    PagesModule,
    FormsModule,
    MatAnchor,
    MatButton,
    MatCheckbox,
    MatFormField,
    MatInput,
    MatLabel,
    RouterLink,
    NgClass,
    ReactiveFormsModule,
    NgIf,
    // RouterOutlet,
    // MatCard,
    // MatCardContent,
    // PagesModule,
    // MatCardTitle
  ],
  templateUrl: './detailBurger.component.html',
  styleUrl: './burger.component.scss'
})

export class DetailBurgerComponent implements OnInit{

  id: string | undefined;
  burger: any = {};
  constructor(
    private burgerService : BurgerService,
    private formBuilder:FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ) {
  }
  ngOnInit(): void {
    if (this.activatedRoute.snapshot.params['id']){  //Permet d'accéder à l'ID de l'article à partir de l'URL.
      this.id =  this.activatedRoute.snapshot.params['id']; // Recuperation de l'ID
      this.burgerService.getBurgerById(this.id).subscribe(
        (data) => {
          console.log(data)
          this.burger=data
          // // @ts-ignore
          // this.burgerForm.get('nom').setValue(data.nom)
          // // @ts-ignore
          // this.burgerForm.get('prix').setValue(data.prix);
          // // @ts-ignore
          // this.burgerForm.get('description').setValue(data.description);
          // // @ts-ignore
          // this.burgerForm.get('image').setValue(data.image);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }
  back():void{ // Le retour a la page principal /article
    this.router.navigate(['/burger']);
  }
  // addUpdateBurger(){
  //   this.verifForm=true;
  //   console.log(this.burgerForm.value)
  //   if(this.burgerForm.invalid){
  //     console.log("tous les champs sont obligatoire");
  //     return
  //   }else{
  //     console.log(this.burgerForm.value)
  //     // let formData = new FormData();
  //     // formData.append('file', this.File,this.File.name); // Le fichier d'image
  //     this.burgerService.ajoutBurger(this.burgerForm.value).subscribe(
  //       (data)=>{
  //         console.log(data)
  //       },
  //       (error)=>{
  //         console.log(error);
  //       }
  //     )
  //     // this.back();
  //   }
  // }
}
