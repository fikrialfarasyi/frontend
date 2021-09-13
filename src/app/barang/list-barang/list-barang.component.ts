import { Component, OnInit } from '@angular/core';
import { Barang } from 'src/app/model/barang';
import { User } from 'src/app/model/user';
import { BarangService } from 'src/app/service/barang.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-list-barang',
  templateUrl: './list-barang.component.html',
  styleUrls: ['./list-barang.component.css']
})
export class ListBarangComponent implements OnInit {

  barang: Barang[] = [];
  private user : User = new User();

  constructor(
    private barangService : BarangService,
    private userService : UserService) { }

  ngOnInit(): void {
    this.getAllBarang();
  }

  public getAllBarang(){
    this.barangService.getAllBarang().subscribe(data => {
      console.log(data);
      this.barang = data;
    });
  }

  deleteBarang(id: number){
    this.barangService.deleteBarangById(id).subscribe(
      data => {
        console.log("id Barang "+data+" Sudah Terhapus");
        this.getAllBarang();
      }
    );
  }

}
