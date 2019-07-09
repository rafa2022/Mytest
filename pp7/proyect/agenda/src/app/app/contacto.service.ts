import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Contacto } from '../contacto';

 
@Injectable({
  providedIn: 'root'
})
export class ContactoService {
  baseUrl = 'http://10.25.1.137/API';

  constructor(private http: HttpClient) { }


  Contactos: Contacto[];

  ssgetAll(): Observable<Contacto[]> {
    return this.http.get(`${this.baseUrl}/listcon`).pipe(
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
  store(Contacto: Contacto): Observable<Contacto[]> {
    return this.http.post(`${this.baseUrl}/store`, { data: Contacto })
      .pipe(map((res) => {
        this.Contactos.push(res['data']);
        return this.Contactos;
      }),
      catchError(this.handleError));
}
update(Contacto: Contacto): Observable<Contacto[]> {
  return this.http.put(`${this.baseUrl}/update`, { data: Contacto })
    .pipe(map(() => {
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
