import { SignupComponent } from './../../signup/signup.component';
import { ComentariosComponent } from './../../comentarios/comentarios.component';
import { LoginComponent } from './../../login/login.component';
import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { SearchAllComponent } from 'app/searchAll/searchAll.component';
import { SearchSteamComponent } from 'app/searchSteam/searchSteam.component';
import { SearchEpicComponent } from 'app/searchEpic/searchEpic.component';
import { SearchGogComponent } from 'app/searchGog/searchGog.component';
import { AuthGuardService } from 'app/Guards/AuthGuardService.service';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'home',           component: HomeComponent, canActivate:[AuthGuardService] },
    { path: 'all',            component: SearchAllComponent, canActivate:[AuthGuardService] },
    { path: 'steam',          component: SearchSteamComponent, canActivate:[AuthGuardService] },
    { path: 'epic',           component: SearchEpicComponent, canActivate:[AuthGuardService] },
    { path: 'gog',            component: SearchGogComponent, canActivate:[AuthGuardService] },
    { path: 'comentarios',    component: ComentariosComponent, canActivate:[AuthGuardService] },
    { path: 'login',          component: LoginComponent },
    { path: 'signup',         component: SignupComponent },
    
    //{ path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent, canActivate:[AuthGuardService] },
    //{ path: 'table-list',     component: TableListComponent },
    //{ path: 'typography',     component: TypographyComponent },
    //{ path: 'icons',          component: IconsComponent },
    //{ path: 'notifications',  component: NotificationsComponent },
    //{ path: 'upgrade',        component: UpgradeComponent },
];
      