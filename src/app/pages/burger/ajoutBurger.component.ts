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
import {BurgerComponent} from "./burger.component";
import Swal from 'sweetalert2';


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
  templateUrl: './ajoutBurger.component.html',
  styleUrl: './burger.component.scss'
})

export class AjoutBurgerComponent implements OnInit{

  File:any;// Déclaration de la variable imageFile
  id:any;
  verifForm=false;
  burgerForm=this.formBuilder.group({
    id:[''],
    nom:['',Validators.required],
    prix:['',Validators.required],
    description:['',Validators.required],
    image:['',Validators.required],
    });

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
          // @ts-ignore
          this.burgerForm.get('nom').setValue(data.nom);
          // @ts-ignore
          this.burgerForm.get('prix').setValue(data.prix);
          // @ts-ignore
          this.burgerForm.get('description').setValue(data.description);
          // @ts-ignore
          this.burgerForm.get('image').setValue(data.image);
        },
        (error)=>{
          console.log(error);
        }
      )
    }
  }
  onFileChange(event: any) {
  //   // const file = event.target.files[0];
  //   // if (file) {
  //   //   const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
  //   //   if (validImageTypes.includes(file.type)) {
  //   //     this.burgerForm.patchValue({
  //   //       image: file,
  //   //     });
  //   //     this.burgerForm.get('image')?.updateValueAndValidity();
  //   //   } else {
  //   //     // Afficher un message d'erreur si le type n'est pas valide
  //   //     alert('Veuillez sélectionner une image valide (jpeg, png, gif).');
  //   //   }
  //   // }
  //   // const file = event.target.files[0]; // Récupère le premier fichier sélectionné
  //   // if (file) {
  //   //   const fileName = file.name; // Cela vous donnera juste le nom du fichier
  //   //   console.log(fileName); // Affiche le nom sans le chemin
  //   //   this.imageFile = file; // Stocke le fichier pour l'envoi
  //   // }
  //   const file = event.target.files[0];
  //   if (file) {
  //     const fileName = file.name; // Récupère le nom du fichier sans le chemin
  //     document.getElementById('fileName')!.innerText = fileName; // Affiche le nom du fichier
  //   }
    this.File=event.target.files[0];
    console.log(this.File);
  }

  back():void{ // Le retour a la page principal /article
    this.router.navigate(['/burger']);
  }
  addUpdateBurger(){
    this.verifForm=true;
    console.log(this.burgerForm.value)
    if(this.burgerForm.invalid){
      console.log("tous les champs sont obligatoire");
      return
    }else{
      console.log(this.burgerForm.value)
      // let formData = new FormData();
      // formData.append('file', this.File,this.File.name); // Le fichier d'image
      this.burgerService.ajoutBurger(this.burgerForm.value).subscribe(
        (data)=>{
          this.burgerService.getAllBurgers()
          console.log(data)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Burger Ajouter avec success",
            showConfirmButton: false,
            timer: 2500
          });
        },
        (error)=>{
          console.log(error);
        }
      )
      this.back();
    }
  }
}
