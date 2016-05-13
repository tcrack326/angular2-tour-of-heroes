import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Hero } from '../../Models/Hero/hero';
import { Observable } from 'rxjs/Observable';

import {HEROES} from '../mock-heroes';

@Injectable()
    export class HeroService{
        constructor(
            private http: Http
        ){ }

        private heroesUrl = 'app/Services/hero-data.json'; //URL to JSON - not web api

        getHeroes() {
            return Promise.resolve(HEROES);
        }

        getHero(id: number) {
            return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
        }

        getHeroesFromJSON(): Observable<Hero[]> {
            return this.http.get(this.heroesUrl)
                .map(this.extractData)
                .catch(this.handleError);
        }

        getHeroFromJSON(id: number): Observable<Hero> {
            return this.http.get(this.heroesUrl)
                .map((res: Response)=> {
                    if (res.status < 200 || res.status >= 300) {
                        throw new Error('Bad response status: ' + res.status);
                    }
                    let body = res.json();
                    let heroToReturn: Hero;
                    body.forEach(hero => hero.id === id? heroToReturn = hero : '' );
                    return heroToReturn || { };
                })
                .catch(this.handleError)
        }

        addHero (name: string) : Observable<Hero> {
            let body = JSON.stringify({ name });
            let headers = new Headers({ 'Content-Type': 'application/json'});
            let options = new RequestOptions({ headers: headers });

            return this.http.post(this.heroesUrl, body, options)
                .map(this.extractData)
                .catch(this.handleError);
        }

    //won't work with JSON
        updateHero (hero: Hero) : Observable<Hero> {
            let body = JSON.stringify(hero);
            let headers = new Headers({ 'Content-Type': 'application/json'});
            let options = new RequestOptions({ headers: headers });

            return this.http.put(this.heroesUrl, body, options)
                .map(this.extractData)
                .catch(this.handleError);
        }

        private extractData(res: Response) {
            if (res.status < 200 || res.status >= 300) {
                throw new Error('Bad response status: ' + res.status);
            }
            let body = res.json();
            return body || { };
        }

        private handleError (error: any) {
            // In a real world app, we might send the error to remote logging infrastructure
            let errMsg = error.message || 'Server error';
            //console.error(errMsg); // log to console instead
            return Observable.throw(errMsg);
        }
    }