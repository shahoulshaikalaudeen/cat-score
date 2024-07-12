import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cat {
  id: string;
  url: string;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private apiUrl = 'http://localhost:5000/cats';

  constructor(private http: HttpClient) { }

  getAllCats(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.apiUrl);
  }

  voteCat(id: string, vote: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/vote`, { id, vote });
  }
}
