import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Supplier } from '../model/supplier';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  private baseUrlGetAllSupplier = "http://localhost:8080/supplier/listSupplier";
  private baseUrlAddSupplier = "http://localhost:8080/supplier/add";
  private baseUrlGetSupplierById = "http://localhost:8080/supplier/listSupplierById";
  private baseUrlUpdateSupplier = "http://localhost:8080/supplier/updateSupplier";
  private baseUrlDeleteSupplier = "http://localhost:8080/supplier/deleteSupplier";

  constructor(private http : HttpClient) { }

  saveIdSupplier(id: number){
    this.idSource.next(id);
  }

  getAllSupplier():Observable<Supplier[]>{
    return this.http.get<Supplier[]>(`${this.baseUrlGetAllSupplier}`);
  }

  saveSupplier(supplier : Supplier):Observable<Supplier>{
    return this.http.post<Supplier>(`${this.baseUrlAddSupplier}`, supplier);
  }

  getSupplierById(id: number):Observable<Supplier>{
    let idParam = new HttpParams().set('id', id);
    return this.http.get<Supplier>(`${this.baseUrlGetSupplierById}`, {params: idParam});
  }

  updateSupplier(supplier: Supplier, id: number):Observable<Supplier>{
    let idParam = new HttpParams().set('id', id);

    return this.http.put<Supplier>(`${this.baseUrlUpdateSupplier}`, supplier, {params: idParam});
  }

  deleteSupplierById(id: number):Observable<number>{
    let idParam = new HttpParams().set('id', id);
    return this.http.delete<number>(`${this.baseUrlDeleteSupplier}`, {params: idParam});

  }
}
