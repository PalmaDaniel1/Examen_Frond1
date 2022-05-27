import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarFrutaComponent } from './mostrar-fruta.component';

describe('MostrarFrutaComponent', () => {
  let component: MostrarFrutaComponent;
  let fixture: ComponentFixture<MostrarFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarFrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
