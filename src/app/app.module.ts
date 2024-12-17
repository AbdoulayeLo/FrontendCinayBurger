import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BurgerComponent} from './pages/burger/burger.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {AjoutBurgerComponent} from "./pages/burger/ajoutBurger.component";
import {CommandeComponent} from "./pages/commande/commande.component";
import {AjoutCommandeComponent} from "./pages/commande/ajoutCommande.component";
import {DetailBurgerComponent} from "./pages/burger/detailBurger.component";
import {StatistiqueComponent} from "./pages/statistique/statistique.component";
// import { NgChartsModule, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';



// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,

  ],
  exports: [TablerIconsModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    BurgerComponent,
    CommandeComponent,
    AjoutCommandeComponent,
    AjoutBurgerComponent,
    DetailBurgerComponent,
    StatistiqueComponent,
    BaseChartDirective

],

})
export class AppModule {}
