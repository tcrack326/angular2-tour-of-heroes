import { Component, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import { NgForm }    from '@angular/common';

import { Hero }    from '../Models/Hero/hero';
import { HeroService } from '../Services/HeroService/hero.service';

@Component({
    selector: 'hero-form',
    templateUrl: 'app/HeroFormComponent/hero-form.component.html'
})

export class HeroFormComponent implements OnInit {
    hero: Hero;
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer', 'Super Fast'];
    // hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;

    constructor(
        private routeParams: RouteParams,
        private heroService: HeroService
    ){
        this.hero = Hero.Empty;
    }

    onSubmit() {
        this.submitted = true;
        this.heroService.updateHero(this.hero).subscribe(hero=>this.hero = hero);
        this.goBack();
    }

    ngOnInit() {
        let id = +this.routeParams.get('id');
        this.heroService.getHeroFromJSON(id)
            .subscribe(hero => {this.hero = hero;  console.log(this.hero);});
    }

    goBack() {
        window.history.back();
    }
}