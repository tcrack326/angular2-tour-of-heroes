System.register(['@angular/core', '@angular/http', 'rxjs/Observable', '../mock-heroes'], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1, mock_heroes_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (mock_heroes_1_1) {
                mock_heroes_1 = mock_heroes_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                    this.heroesUrl = 'app/Services/hero-data.json'; //URL to JSON - not web api
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(mock_heroes_1.HEROES);
                };
                HeroService.prototype.getHero = function (id) {
                    return this.getHeroes().then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.getHeroesFromJSON = function () {
                    return this.http.get(this.heroesUrl)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HeroService.prototype.getHeroFromJSON = function (id) {
                    return this.http.get(this.heroesUrl)
                        .map(function (res) {
                        if (res.status < 200 || res.status >= 300) {
                            throw new Error('Bad response status: ' + res.status);
                        }
                        var body = res.json();
                        var heroToReturn;
                        body.forEach(function (hero) { return hero.id === id ? heroToReturn = hero : ''; });
                        return heroToReturn || {};
                    })
                        .catch(this.handleError);
                };
                HeroService.prototype.addHero = function (name) {
                    var body = JSON.stringify({ name: name });
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.post(this.heroesUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                //won't work with JSON
                HeroService.prototype.updateHero = function (hero) {
                    var body = JSON.stringify(hero);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.http.put(this.heroesUrl, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
                };
                HeroService.prototype.extractData = function (res) {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    var body = res.json();
                    return body || {};
                };
                HeroService.prototype.handleError = function (error) {
                    // In a real world app, we might send the error to remote logging infrastructure
                    var errMsg = error.message || 'Server error';
                    //console.error(errMsg); // log to console instead
                    return Observable_1.Observable.throw(errMsg);
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map