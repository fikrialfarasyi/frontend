import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Barang } from 'src/app/model/barang';
import { Supplier } from 'src/app/model/supplier';
import { BarangService } from 'src/app/service/barang.service';
import { SupplierService } from 'src/app/service/supplier.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-barang',
  templateUrl: './create-barang.component.html',
  styleUrls: ['./create-barang.component.css']
})
export class CreateBarangComponent implements OnInit {

  barang: Barang = new Barang();
  supplier: Supplier[] = [];
  idLogin!: Number;

  constructor(private barangService: BarangService,
    private supplierService: SupplierService,
    private userService:UserService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.currentId.subscribe(data => this.idLogin = data);
    this.getAllSupplier();
  }

  saveBarang(){
    this.barang.idUser = this.idLogin;
    this.barangService.saveBarang(this.barang).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['/list-barang']);
      }
    );
  }

  getAllSupplier(){
    this.supplierService.getAllSupplier().subscribe(
      data => {
        this.supplier = data;
      }
    );
  }

}
