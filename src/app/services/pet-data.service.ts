import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet, PetStatus } from '../types/app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PetDataService {
  apiPath: string;
  constructor(private http: HttpClient) {
    this.apiPath = environment.apiPath;
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiPath}/v2/pet/${id}`);
  }

  getListByStatus(status: PetStatus): Observable<Pet[]> {
    return this.http.get<Pet[]>(
      `${this.apiPath}/v2/pet/findByStatus?status=${status}`
    );
  }
}
