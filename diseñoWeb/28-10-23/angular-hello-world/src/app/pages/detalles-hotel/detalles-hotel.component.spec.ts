import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesHotelComponent } from './detalles-hotel.component';

describe('DetallesHotelComponent', () => {
  let component: DetallesHotelComponent;
  let fixture: ComponentFixture<DetallesHotelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallesHotelComponent]
    });
    fixture = TestBed.createComponent(DetallesHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
