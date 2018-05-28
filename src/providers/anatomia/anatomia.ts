import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AnatomiaProvider {

  anatomias: any[] = [];
  constructor(private _http: Http) { }

  getAnatomia(): Observable<any> {
    return this._http.get('../assets/data/anatomia.json')
                .map(res => res.json());
              
  }
}