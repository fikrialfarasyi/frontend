import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/model/supplier';
import { SupplierService } from 'src/app/service/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  supplier: Supplier = new Supplier();

  constructor(private supplierService : SupplierService,
    private router : Router) { }

  ngOnInit(): void {
  }

  saveSupplier(){
    this.supplierService.saveSupplier(this.supplier).subscribe(
      data => {
        this.router.navigate(['/list-supplier']);
      }
    );
  }

}
