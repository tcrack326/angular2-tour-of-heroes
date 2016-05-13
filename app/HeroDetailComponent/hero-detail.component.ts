import { Component, OnInit } from '@angular/core';
import { Router, RouteParams } from '@angular/router-deprecated';

import { Hero } from './../Models/Hero/hero';
import { HeroService } from './../Services/HeroService/hero.service';


@Component ({
    selector: 'my-hero-detail',
    templateUrl: 'app/HeroDetailComponent/hero-detail.component.html',
    styleUrls: ['app/HeroDetailComponent/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroService: HeroService,
        private router: Router,
        private routeParams: RouteParams
    ) { }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    gotoForm() {
        this.router.navigate(['HeroDetailForm', {id: this.hero.id}]);
    }

    goBack() {
        window.history.back();
    }
}