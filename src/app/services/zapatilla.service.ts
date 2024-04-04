import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZapatillaService {
  private AppUrl = 'https://localhost:7146/';
  private ApiUrl = 'api/Zapatilla';

  constructor(private http: HttpClient) { }

  // Get List Zapatillas
  getAllZapatillas(): Observable<any> {
    return this.http.get(this.AppUrl + this.ApiUrl);
  }

  // Get Zapatilla by ID
  getZapatillaById(id: number): Observable<any> {
    return this.http.get(this.AppUrl + this.ApiUrl + '/' + id);
  }

  // Create Zapatilla
  createZapatilla(zapatilla: any): Observable<any> {
    return this.http.post(this.AppUrl + this.ApiUrl, zapatilla);
  }

  // Update Zapatilla
  updateZapatilla(zapatilla: any): Observable<any> {
    return this.http.put(this.AppUrl + this.ApiUrl + '/' + zapatilla.id, zapatilla);
  }

  // Delete Zapatilla
  deleteZapatilla(id: number): Observable<any> {
    return this.http.delete(this.AppUrl + this.ApiUrl + '/' + id);
  }
}
