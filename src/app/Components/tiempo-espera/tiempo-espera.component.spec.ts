import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiempoEsperaComponent } from './tiempo-espera.component';

describe('TiempoEsperaComponent', () => {
  let component: TiempoEsperaComponent;
  let fixture: ComponentFixture<TiempoEsperaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiempoEsperaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiempoEsperaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
