import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private link = 'http://localhost/6packs/';

  constructor(private http: HttpClient) {
    console.log('Data Service is working');
  }

  request(endpoint, data) {
    return this.http.post(this.link + endpoint, JSON.stringify(data));
  }
}
