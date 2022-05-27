import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarFrutaComponent } from './registrar-fruta.component';

describe('RegistrarFrutaComponent', () => {
  let component: RegistrarFrutaComponent;
  let fixture: ComponentFixture<RegistrarFrutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarFrutaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarFrutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
