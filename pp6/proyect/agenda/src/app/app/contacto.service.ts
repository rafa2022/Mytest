import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contacto } from '../contacto';


@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  baseUrl = 'http://localhost/API';

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
update(Contacto: Contacto): Observable<Contacto[]> {
  return this.http.put(`${this.baseUrl}/update`, { data: Contacto })
    .pipe(map((res) => {
      const theConacto = this.Contactos.find((item) => {
        return +item['id'] === +name['id'];
      });
      if (theConacto) {
        theConacto['price'] = +Contacto['price'];
        theConacto['model'] = Contacto['model'];
      }
      return this.Contactos;
    }),
    catchError(this.handleError));
}
}
