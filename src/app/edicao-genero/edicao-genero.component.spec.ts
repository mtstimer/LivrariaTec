import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoGeneroComponent } from './edicao-genero.component';

describe('EdicaoGeneroComponent', () => {
  let component: EdicaoGeneroComponent;
  let fixture: ComponentFixture<EdicaoGeneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoGeneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
