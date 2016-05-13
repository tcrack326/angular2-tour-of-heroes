import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import { Hero } from './../Models/Hero/hero';
import { HeroDetailComponent } from './../HeroDetailComponent/hero-detail.component';
import { HeroService } from './../Services/HeroService/hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/HeroesComponent/heroes.component.html',
    styleUrls: ['app/HeroesComponent/heroes.component.css'],
    directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit{

    heroes: Hero[];
    selectedHero: Hero;
    errorMessage: string;

    constructor(
        private heroService: HeroService,
        private router: Router) { }

    getHeroes() {
        this.heroService.getHeroesFromJSON().subscribe(
            heroes=> {this.heroes = heroes; console.log(heroes)},
            error=> this.errorMessage = <any>error);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero: Hero) { this.selectedHero = hero;}

    gotoDetail() {
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id }]);
    }

    addHero (name: string) {
        if (!name) {return;}
        this.heroService.addHero(name)
            .subscribe(
                hero  => this.heroes.push(hero),
                error =>  this.errorMessage = <any>error
            );
    }
}