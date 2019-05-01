import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor(private httpSvc: HttpClient) { }

  getPlanets() {
    const p1 = this.httpSvc.get("https://swapi.co/api/planets");
    const p2 = this.httpSvc.get("https://swapi.co/api/planets?page=2");
    const p3 = this.httpSvc.get("https://swapi.co/api/planets?page=3");
    const p4 = this.httpSvc.get("https://swapi.co/api/planets?page=4");
    const p5 = this.httpSvc.get("https://swapi.co/api/planets?page=5");
    const p6 = this.httpSvc.get("https://swapi.co/api/planets?page=6");
    const p7 = this.httpSvc.get("https://swapi.co/api/planets?page=7");

    return merge(p1, p2, p3, p4 , p5, p6, p7);
  }
}
