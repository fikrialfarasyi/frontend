import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-list-supplier',
  templateUrl: './list-supplier.component.html',
  styleUrls: ['./list-supplier.component.css']
})
export class ListSupplierComponent implements OnInit {

  supplier: Supplier[] = [];
  
  constructor(private supplierService : SupplierService,
    private router : Router) { }

  ngOnInit(): void {
    this.getAllSupplier();
  }

  getAllSupplier(){
    this.supplierService.getAllSupplier().subscribe(
      data => {
        this.supplier = data;
      });
  }

  updateSupplier(id: number){
    this.supplierService.saveIdSupplier(id);
    this.router.navigate(['/update-supplier']);
  }

  deleteSupplier(id: number){
    this.supplierService.deleteSupplierById(id).subscribe(
      data => {
        console.log("Id Supplier "+data+" Sudah Terhapus");
        this.getAllSupplier();
      }
    );
  }

}
