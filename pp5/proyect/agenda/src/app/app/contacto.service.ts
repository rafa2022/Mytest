import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contacto } from '../contacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient) { }

  Contactos: Contacto[];

  getAll(): Observable<Contacto[]> {
    return this.http.get(`${this.baseUrl}/list`).pipe(
      map((res) => {
        this.Contactos = res['data'];
        return this.Contactos;
    }),
    
    catchError(this.handleError));
  }
  private handleError(error: HttpErrorResponse) {
    console.log(error);
   
    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
  store(contacto: Contacto): Observable<Contacto[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: Contacto })
      .pipe(map((res) => {
        this.Contactos.push(res['data']);
        return this.Contactos;
      }),
      catchError(this.handleError));
}
update(car: Contacto): Observable<Contacto[]> {
  return this.http.put(`${this.baseUrl}/update`, { data: car })
    .pipe(map((res) => {
      const theCar = this.Contactos.find((item) => {
        return +item['id'] === +car['id'];
      });
      if (theCar) {
        theCar['price'] = +car['price'];
        theCar['model'] = car['model'];
      }
      return this.Contactos;
    }),
    catchError(this.handleError));
}
}
