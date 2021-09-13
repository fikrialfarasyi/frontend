import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { ListBarangComponent } from './barang/list-barang/list-barang.component';
import { CreateBarangComponent } from './barang/create-barang/create-barang.component';
import { ListSupplierComponent } from './supplier/list-supplier/list-supplier.component';
import { CreateSupplierComponent } from './supplier/create-supplier/create-supplier.component';
import { UpdateSupplierComponent } from './supplier/update-supplier/update-supplier.component';
import { ListTransaksiComponent } from './transaksi/list-transaksi/list-transaksi.component';
import { CreateTransaksiComponent } from './transaksi/create-transaksi/create-transaksi.component';
import { UpdateTransaksiComponent } from './transaksi/update-transaksi/update-transaksi.component';
import { RegistrationComponent } from './registration/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ListBarangComponent,
    CreateBarangComponent,
    ListSupplierComponent,
    CreateSupplierComponent,
    UpdateSupplierComponent,
    ListTransaksiComponent,
    CreateTransaksiComponent,
    UpdateTransaksiComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
