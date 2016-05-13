import {Component, provide} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';

import {HeroesComponent} from "./HeroesComponent/heroes.component";
import { HeroService } from './Services/HeroService/hero.service'
import {DashboardComponent} from "./DashboardComponent/dashboard.component";
import { HeroDetailComponent } from "./HeroDetailComponent/hero-detail.component";
import { HeroFormComponent } from './HeroFormComponent/hero-form.component';

// in-memory web api imports
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api/core';
//import { HeroData } from './Services/mock-heroes';


@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Heroes']">Heroes</a>
        </nav>
        
        <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
    directives: [
        ROUTER_DIRECTIVES
    ],
    providers: [
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        HeroService,
        // provide(XHRBackend, { useClass: InMemoryBackendService }), //in-mem server
        // provide(SEED_DATA, { useClass: HeroData }), //in-mem server data
    ]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/detail/:id/edit',
        name: 'HeroDetailForm',
        component: HeroFormComponent
    }
])

export class AppComponent{
    title = 'Tour of Heroes';
}