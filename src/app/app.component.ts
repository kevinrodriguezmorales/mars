import { Component } from '@angular/core';
import { MarvelApiService } from './services/marvel-api/marvel-api.service';
import { Observable, map, of } from 'rxjs';

@Component({
    selector: 'kev-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'first-app';

    public heroes$: Observable<Array<any>> = of([]);
    public selectedHeroe: number = 0;

    constructor (
        private _marvelApi: MarvelApiService
    ) {
        this.heroes$ = this._marvelApi.getCharacters().pipe(
            map(res => res.data.results)
        )
    }

    public getComics(identifier: number) {
        this.selectedHeroe = identifier
    }
}
