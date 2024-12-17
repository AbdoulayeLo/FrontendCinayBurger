import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {BurgerComponent} from "./pages/burger/burger.component";
import {AjoutBurgerComponent} from "./pages/burger/ajoutBurger.component";
import {CommandeComponent} from "./pages/commande/commande.component";
import {AjoutCommandeComponent} from "./pages/commande/ajoutCommande.component";
import {DetailBurgerComponent} from "./pages/burger/detailBurger.component";
import {authGuard} from "./auth.guard";
import {AppSideLoginComponent} from "./pages/authentication/login/login.component";
import {StatistiqueComponent} from "./pages/statistique/statistique.component";
const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/accueil',
        pathMatch: 'full',
      },
      {
        path: 'accueil',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
      },
      { path: 'burger', component: BurgerComponent },
      {canActivate:[authGuard], path: 'ajoutBurger', component: AjoutBurgerComponent },
      {canActivate:[authGuard], path: 'commande', component: CommandeComponent },
      { path: 'ajoutCommande', component: AjoutCommandeComponent },
      { path: 'DetailBurger/:id', component:DetailBurgerComponent },
      { path: 'login', component:AppSideLoginComponent },
      { path: 'statistique', component:StatistiqueComponent },
    ],

  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },
];
// export const routes: Routes = [
//   { path: 'dashboard', component: AppComponent },
//   { path: 'burger', component: BurgerComponent },
//   // { path: 'UpdateArticle/:id', component: ArticleAjoutComponent },
//   // { path: 'user', component: UserComponent },
// ];
// @ts-ignore
// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
