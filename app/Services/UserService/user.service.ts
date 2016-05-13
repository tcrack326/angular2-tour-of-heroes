import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { User } from '../../Models/User/user';
import { Observable } from 'rxjs/Observable';

import {USERS} from '../mock-users';

@Injectable()
export class UserService{
    constructor(
        private http: Http
    ){ }

    private usersUrl = 'app/Services/user-data.json'; //URL to JSON - not web api

    getUsers() {
        return Promise.resolve(USERS);
    }

    getUser(id: number) {
        return this.getUsers().then(users => users.filter(user => user.id === id)[0]);
    }

    getUsersFromJSON(): Observable<User[]> {
        return this.http.get(this.usersUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getUserFromJSON(id: number): Observable<User> {
        return this.http.get(this.usersUrl)
            .map((res: Response)=> {
                if (res.status < 200 || res.status >= 300) {
                    throw new Error('Bad response status: ' + res.status);
                }
                let body = res.json();
                let userToReturn: User = body.filter(user=> user.id === id)[0];
            })
            .catch(this.handleError)
    }

    addUser (name: string) : Observable<User> {
        let body = JSON.stringify({ name });
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.post(this.usersUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    }

    //won't work with JSON
    updateUser (user: User) : Observable<User> {
        let body = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });

        return this.http.put(this.usersUrl, body, options)
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