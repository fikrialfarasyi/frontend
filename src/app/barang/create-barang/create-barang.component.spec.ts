import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBarangComponent } from './create-barang.component';

describe('CreateBarangComponent', () => {
  let component: CreateBarangComponent;
  let fixture: ComponentFixture<CreateBarangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateBarangComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBarangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
