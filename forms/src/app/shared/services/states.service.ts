import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get('/assets/data/states.json');
  }
}
