import { Component, OnInit } from '@angular/core';
import { navItems } from './sidebar-data';
import { NavService } from '../../../services/nav.service';
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  navItems = navItems;

  constructor(public navService: NavService,
              private loginService: LoginService,) {}

  get filteredNavItems() {
    // Filtrer les éléments de navigation en fonction de l'authentification
    if (this.loginService.isAuthenticated()) {
      return this.navItems;
    } else {
      // Ne montrer que le menu et les éléments de navigation accessibles aux non-connectés
      return this.navItems.filter(item => item.route === '/burger' || item.route === '/login' || item.navCap);
    }
  }
  ngOnInit(): void {}
}
