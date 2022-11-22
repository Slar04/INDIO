import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntoEsperaComponent } from './punto-espera.component';

describe('PuntoEsperaComponent', () => {
  let component: PuntoEsperaComponent;
  let fixture: ComponentFixture<PuntoEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntoEsperaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuntoEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
