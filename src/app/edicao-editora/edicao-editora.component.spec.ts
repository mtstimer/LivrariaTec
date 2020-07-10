import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoEditoraComponent } from './edicao-editora.component';

describe('EdicaoEditoraComponent', () => {
  let component: EdicaoEditoraComponent;
  let fixture: ComponentFixture<EdicaoEditoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicaoEditoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicaoEditoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
