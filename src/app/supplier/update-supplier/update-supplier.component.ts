import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();
  idSupplier! :number;

  constructor(private supplierService:SupplierService,
    private router : Router) { }

  ngOnInit(): void {
    this.supplierService.currentId.subscribe(data => this.idSupplier = data);
    console.log("data :: "+this.idSupplier);
    this.getSupplierById(this.idSupplier);
  }

  getSupplierById(id: number){
    this.supplierService.getSupplierById(id).subscribe(
      data => {
        console.log(data);
        this.supplier = data;
      }
    );
  }

  updateSupplier(){
    this.supplierService.updateSupplier(this.supplier, this.idSupplier).subscribe(
      data => {
        this.router.navigate(['/list-supplier']);
      }
    );
  }

}
