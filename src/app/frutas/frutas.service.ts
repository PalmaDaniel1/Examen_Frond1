import { Injectable } from '@angular/core';
import { Fruta } from '../others/fruta';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FrutasService {
  
  _fru: Fruta;
  _fru2: Fruta[];

  constructor(
    private http: HttpClient
  ) { }

  postFruta(_fru): Observable<any>{
    return this.http.post("http://localhost:8888/frutas/agregar/",_fru);
  }

  buscar_fruta(_fru): Observable<any>{
    return this.http.get(`http://localhost:8888/frutas/buscar/${_fru}`);
  }

  updateFrutas(_fru:Fruta , actualizar):Observable<any>{
    console.log(_fru, actualizar)
    return this.http.patch(`http://localhost:8888/frutas/actualizar/${_fru.clave}`,actualizar);
  }

  getFrutas(): Observable<Fruta[]> {
    return this.http.get<Fruta[]>('http://localhost:8888/frutas/listar');
  }
  leerFichero(): Observable<Fruta[]>{
    return this.http.get<Fruta[]>('http://localhost:8888/frutas/leerFichero');
  }

}
