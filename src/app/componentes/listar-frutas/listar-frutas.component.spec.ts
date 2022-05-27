import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFrutasComponent } from './listar-frutas.component';

describe('ListarFrutasComponent', () => {
  let component: ListarFrutasComponent;
  let fixture: ComponentFixture<ListarFrutasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFrutasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
