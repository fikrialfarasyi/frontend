import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTransaksiComponent } from './create-transaksi.component';

describe('CreateTransaksiComponent', () => {
  let component: CreateTransaksiComponent;
  let fixture: ComponentFixture<CreateTransaksiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTransaksiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTransaksiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
