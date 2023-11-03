import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarvelApiService {

    private privateKey: string = '7e9f69fa0f6630402784070dbe2b62b68f3eb6f7'
    private publicKey: string = '900bb38e5fbc0487434846a8b4903495'

    constructor(
        private _http: HttpClient
    ) { }

    public getCharacters(): Observable<any> {
        const ts = new Date().getTime().toString();
        const hash = CryptoJS.MD5(ts + this.privateKey + this.publicKey).toString();

        const apiUrl = `https://gateway.marvel.com/v1/public/characters`;
        const params = `?ts=${ts}&apikey=${this.publicKey}&hash=${hash}`;

        return this._http.get(apiUrl + params);
    }

}
