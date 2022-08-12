import { User } from './../types/app.interfaces';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponse, Pet, PetStatus } from '../types/app.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PetDataService {
  apiPath: string;
  constructor(private http: HttpClient) {
    this.apiPath = environment.apiPath;
  }

  login(user: User): Observable<APIResponse> {
    return this.http.get<APIResponse>(
      `${this.apiPath}/v2/user/login?username=${user.username}&password=${user.password}`
    );
  }

  logout(): Observable<APIResponse> {
    return this.http.get<APIResponse>(`${this.apiPath}/v2/user/logout`);
  }

  getPet(id: number): Observable<Pet> {
    return this.http.get<Pet>(`${this.apiPath}/v2/pet/${id}`);
  }

  getListByStatus(status: PetStatus): Observable<Pet[]> {
    return this.http.get<Pet[]>(
      `${this.apiPath}/v2/pet/findByStatus?status=${status}`
    );
  }

  addPet(payload: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiPath}/v2/pet`, payload);
  }
}
