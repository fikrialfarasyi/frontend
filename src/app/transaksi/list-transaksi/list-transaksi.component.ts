import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Transaksi } from 'src/app/model/transaksi';
import { TransaksiService } from 'src/app/service/transaksi.service';

@Component({
  selector: 'app-list-transaksi',
  templateUrl: './list-transaksi.component.html',
  styleUrls: ['./list-transaksi.component.css']
})
export class ListTransaksiComponent implements OnInit {

  transaksi: Transaksi[] = [];

  constructor(private transaksiService: TransaksiService,
    private router:Router) { }

  ngOnInit(): void {
    this.getAllTransaksi();
  }

  getAllTransaksi(){
    this.transaksiService.getAllTransaksi().subscribe(
      data => {
        this.transaksi = data;
      }
    );
  }

  updateTransaksi(id:number){
    this.transaksiService.saveIdTransaksi(id);
    this.router.navigate(['/update-transaksi']);
  }

  deleteTransaksi(id: number){
    this.transaksiService.deleteTransaksiById(id).subscribe(
      data => {
        alert("id "+data+" berhasil dihapus");
        this.getAllTransaksi();
      }
    );
  }

}
