import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Home',  icon: 'dashboard', class: '' },
    { path: '/all', title: 'Search All',  icon: 'manage_search', class: '' },
    { path: '/steam', title: 'Search Steam',  icon: 'search', class: '' },
    { path: '/epic', title: 'Search Epic',  icon: 'search', class: '' },
    { path: '/gog', title: 'Search Gog',  icon: 'search', class: '' },
    //{ path: '/login', title: 'Login',  icon: 'search', class: '' },
    //{ path: '/dashboard', title: 'dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'manage_search', class: '' },
    //{ path: '/table-list', title: 'Search Steam',  icon:'search', class: '' },
    //{ path: '/typography', title: 'Search Epic',  icon:'search', class: '' },
    //{ path: '/icons', title: 'Search gog',  icon:'search', class: '' },
    //{ path: '/maps', title: 'User',  icon:'account_circle', class: '' },
    //{ path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    //{ path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
