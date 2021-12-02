import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendedorDashboardComponent } from './vendedor-dashboard.component';

describe('VendedorDashboardComponent', () => {
  let component: VendedorDashboardComponent;
  let fixture: ComponentFixture<VendedorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendedorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendedorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
