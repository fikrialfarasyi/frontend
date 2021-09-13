import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from 'src/app/model/barang';
import { Transaksi } from 'src/app/model/transaksi';
import { BarangService } from 'src/app/service/barang.service';
import { TransaksiService } from 'src/app/service/transaksi.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-transaksi',
  templateUrl: './create-transaksi.component.html',
  styleUrls: ['./create-transaksi.component.css']
})
export class CreateTransaksiComponent implements OnInit {

  transaksi: Transaksi = new Transaksi();
  barang: Barang[] = [];
  idLogin!: Number;

  constructor(private transaksiService: TransaksiService,
    private barangService:BarangService,
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.currentId.subscribe(data => this.idLogin = data);
    this.getAllBarang();
  }

  saveTransaksi(){
    this.transaksi.idUser = this.idLogin;

    this.transaksiService.saveTransaksi(this.transaksi).subscribe(
      data => {
        console.log(data);
        if(data == 1){
          alert("Berhasil Melakukan Transaksi");
          this.router.navigate(['/list-transaksi']);
        }else if(data == 2){
          alert("Jumlah Melebihin Stok");
        }else{
          alert("Gagal");
        }
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

}
