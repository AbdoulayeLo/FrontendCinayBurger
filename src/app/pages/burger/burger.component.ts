import { Component, OnInit } from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {PagesModule} from "../pages.module";
import {BurgerService} from "../../services/burger.service";
import {Burger} from "../../model/burger";
import {NgForOf, NgOptimizedImage} from "@angular/common";


// @ts-ignore
@Component({
  selector: 'app-burger',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardContent,
    PagesModule,
    MatCardTitle,
    NgOptimizedImage,
    RouterLink,
    NgForOf
  ],
  templateUrl: './burger.component.html',
  styleUrl: './burger.component.scss'
})

export class BurgerComponent implements OnInit{
  tabBurgers: Burger[] = [];
  baseUrl:string= 'http://localhost:8000/storage/';

  constructor(private burgerService : BurgerService,
              private router: Router) {
  }
  ngOnInit(): void {
    this.getBurger();
  }
  getBurger(){
    this.burgerService.getAllBurgers().subscribe(
      (data:Burger[])=>{
        this.tabBurgers= data;
        console.log(this.tabBurgers);
      },
      (error)=>{
        console.log(error);
    }
    )
  }

  getImageUrl(imagePath: string ):string{
    return `${this.baseUrl}${imagePath}`;
  }

  selectBurger(burgerId: number) {
    this.router.navigate(['/ajoutCommande'], { queryParams: { burger_id: burgerId } });
  }

}
