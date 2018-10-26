import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { State } from '../models/state';

@Injectable({
  providedIn: 'root'
})
export class StatesService {

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<State[]>('/assets/data/states.json');
  }
}
