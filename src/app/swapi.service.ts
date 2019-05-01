import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    return this.httpSvc.get("https://swapi.co/api/planets");
  }
}
