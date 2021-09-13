import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaksi } from '../model/transaksi';

@Injectable({
  providedIn: 'root'
})
export class TransaksiService {

  private baseUrlGetAllTransaksi = "http://localhost:8080/transaksi/listTransaksi";
  private baseUrlTransaksiById = "http://localhost:8080/transaksi/transaksiById";
  private baseUrlSave = "http://localhost:8080/transaksi/addTransaksi";
  private baseUrlUpdate = "http://localhost:8080/transaksi/updateById";
  private baseUrlDelete = "http://localhost:8080/transaksi/deleteTransaksi";

  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  constructor(private http : HttpClient) { }

  saveIdTransaksi(id: number){
    this.idSource.next(id);
  }

  getAllTransaksi():Observable<Transaksi[]>{
    return this.http.get<Transaksi[]>(`${this.baseUrlGetAllTransaksi}`);
  }

  getTransaksiById(id: number):Observable<Transaksi>{
    let idParam = new HttpParams().set('id', id);

    return this.http.get<Transaksi>(`${this.baseUrlTransaksiById}`, {params: idParam});
  }

  saveTransaksi(transaksi: Transaksi){

    return this.http.post<number>(`${this.baseUrlSave}`, transaksi);
  }

  updateTransaksiById(transaksi: Transaksi, id: number):Observable<Transaksi>{
    let idParam = new HttpParams().set('id', id);

    return this.http.put<Transaksi>(`${this.baseUrlUpdate}`, transaksi, {params: idParam});
  }

  deleteTransaksiById(id:number):Observable<number>{
    let idParam = new HttpParams().set('id', id);

    return this.http.delete<number>(`${this.baseUrlDelete}`, {params: idParam});
  }
}
