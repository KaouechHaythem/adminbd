import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/users',         title: 'Users',        icon:'nc-tile-56',    class: '' },
    { path: '/signin',          title: 'Sign In',      icon:'nc-single-02',  class: '' },
    { path: '/signup',          title: 'Sign up',      icon:'nc-single-02',  class: '' },
   
   
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
