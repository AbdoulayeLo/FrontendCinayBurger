import { NavItem } from './nav-item/nav-item';


export const navItems: NavItem[] = [

  {
    navCap: 'Accueil',
  },
  {
    displayName: 'Tableau de Bord',
    iconName: 'layout-dashboard',
    route: '/statistique',
  },
  {
    navCap: 'RESTAURANTS',
  },
  {
    displayName: 'MENU',
    iconName: 'layout-navbar-expand',
    route: '/burger',
  },
  {

    displayName: 'AJOUT BURGER',
    iconName: 'plus',
    route: '/ajoutBurger',
  },
  {
    displayName: 'LISTES COMMANDES',
    iconName: 'soup',
    route: '/commande',
  },

  // {
  //   displayName: 'Lists',
  //   iconName: 'LISTE BURGER',
  //   route: '/ui-components/lists',
  // },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/login',
  },



];
