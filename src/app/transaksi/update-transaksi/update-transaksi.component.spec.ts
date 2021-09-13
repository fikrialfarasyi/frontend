import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTransaksiComponent } from './update-transaksi.component';

describe('UpdateTransaksiComponent', () => {
  let component: UpdateTransaksiComponent;
  let fixture: ComponentFixture<UpdateTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
