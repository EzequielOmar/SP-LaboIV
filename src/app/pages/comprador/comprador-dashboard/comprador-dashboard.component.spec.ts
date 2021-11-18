import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompradorDashboardComponent } from './comprador-dashboard.component';

describe('CompradorDashboardComponent', () => {
  let component: CompradorDashboardComponent;
  let fixture: ComponentFixture<CompradorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompradorDashboardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompradorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
