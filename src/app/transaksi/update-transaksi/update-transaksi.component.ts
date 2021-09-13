import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from 'src/app/model/barang';
import { Transaksi } from 'src/app/model/transaksi';
import { BarangService } from 'src/app/service/barang.service';
import { TransaksiService } from 'src/app/service/transaksi.service';

@Component({
  selector: 'app-update-transaksi',
  templateUrl: './update-transaksi.component.html',
  styleUrls: ['./update-transaksi.component.css']
})
export class UpdateTransaksiComponent implements OnInit {

  transaksi: Transaksi = new Transaksi();
  idTransaksi!: number;
  barang: Barang[] = [];

  constructor(private transaksiService:TransaksiService,
    private barangService:BarangService,
    private router:Router) { }

  ngOnInit(): void {
    this.transaksiService.currentId.subscribe(data => this.idTransaksi = data);

    this.getTransaksiById(this.idTransaksi);

    this.getAllBarang();
  }

  getTransaksiById(id: number){
    this.transaksiService.getTransaksiById(id).subscribe(
      data => {
        this.transaksi = data;
      }
    );
  }

  getAllBarang(){
    this.barangService.getAllBarang().subscribe(
      data => {
        this.barang = data;
      }
    );
  }

  updateTransaksi(){
    this.transaksiService.updateTransaksiById(this.transaksi, this.idTransaksi).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/list-transaksi']);
      }
    );
  }
}
