import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DigimonsService {
  private API_SERVER = 'https://digimon-api.vercel.app/api/digimon';

  constructor(public http: HttpClient) {}

  getDigimons(): Observable<any> {
    return this.http.get(this.API_SERVER);
  }
}
