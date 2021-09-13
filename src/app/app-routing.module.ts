import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBarangComponent } from './barang/create-barang/create-barang.component';
import { ListBarangComponent } from './barang/list-barang/list-barang.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration/registration.component';
import { CreateSupplierComponent } from './supplier/create-supplier/create-supplier.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { CreateTransaksiComponent } from './transaksi/create-transaksi/create-transaksi.component';
import { ListTransaksiComponent } from './transaksi/list-transaksi/list-transaksi.component';
import { UpdateTransaksiComponent } from './transaksi/update-transaksi/update-transaksi.component';

const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "dashboard", component:DashboardComponent},
  {path: "list-barang", component:ListBarangComponent},
  {path: "create-barang", component:CreateBarangComponent},
  {path: "list-supplier", component:ListSupplierComponent},
  {path: "create-supplier", component:CreateSupplierComponent},
  {path: "update-supplier", component:UpdateSupplierComponent},
  {path: "list-transaksi", component:ListTransaksiComponent},
  {path: "create-transaksi", component:CreateTransaksiComponent},
  {path: "update-transaksi", component:UpdateTransaksiComponent},
  {path: "registration", component:RegistrationComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
