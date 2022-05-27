import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarFrutaComponent } from './buscar-fruta.component';

describe('BuscarFrutaComponent', () => {
  let component: BuscarFrutaComponent;
  let fixture: ComponentFixture<BuscarFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarFrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
