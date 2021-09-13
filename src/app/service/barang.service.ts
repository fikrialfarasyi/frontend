import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Barang } from '../model/barang';

@Injectable({
  providedIn: 'root'
})
export class BarangService {

  private baseUrlGetAll = "http://localhost:8080/barang/listBarang";
  private baseUrlSave = "http://localhost:8080/barang/add";
  private baseUrlGetBarangById = "http://localhost:8080/barang/listBarangById";
  private baseUrlUpdate = "http://localhost:8080/barang/updateBarang";
  private baseUrlDelete= "http://localhost:8080/barang/deleteBarang";

  constructor(private http : HttpClient) { }

  getAllBarang():Observable<Barang[]>{
    return this.http.get<Barang[]>(`${this.baseUrlGetAll}`);
  }

  saveBarang(barang : Barang):Observable<Barang>{

    return this.http.post<Barang>(`${this.baseUrlSave}`, barang);
  }

  getBarangById(id: number):Observable<Barang>{
    let idParam = new HttpParams().set('id', id);

    return this.http.get<Barang>(`${this.baseUrlGetBarangById}`, {params: idParam});
  }

  updateBarangById(barang:Barang, id: number):Observable<Barang>{
    let idParam = new HttpParams().set('id', id);

    return this.http.put<Barang>(`${this.baseUrlUpdate}`, barang, {params: idParam});
  }

  deleteBarangById(id:number):Observable<number>{
    let idParam = new HttpParams().set('id', id);

    return this.http.delete<number>(`${this.baseUrlDelete}`, {params: idParam});
  }

}
