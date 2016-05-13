System.register(['@angular/core', '@angular/router-deprecated', '../Models/Hero/hero', '../Services/HeroService/hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_deprecated_1, hero_1, hero_service_1;
    var HeroFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            HeroFormComponent = (function () {
                function HeroFormComponent(routeParams, heroService) {
                    this.routeParams = routeParams;
                    this.heroService = heroService;
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer', 'Super Fast'];
                    // hero = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    this.hero = hero_1.Hero.Empty;
                }
                HeroFormComponent.prototype.onSubmit = function () {
                    var _this = this;
                    this.submitted = true;
                    this.heroService.updateHero(this.hero).subscribe(function (hero) { return _this.hero = hero; });
                    this.goBack();
                };
                HeroFormComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var id = +this.routeParams.get('id');
                    this.heroService.getHeroFromJSON(id)
                        .subscribe(function (hero) { _this.hero = hero; console.log(_this.hero); });
                };
                HeroFormComponent.prototype.goBack = function () {
                    window.history.back();
                };
                HeroFormComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-form',
                        templateUrl: 'app/HeroFormComponent/hero-form.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.RouteParams, hero_service_1.HeroService])
                ], HeroFormComponent);
                return HeroFormComponent;
            }());
            exports_1("HeroFormComponent", HeroFormComponent);
        }
    }
});
//# sourceMappingURL=hero-form.component.js.map