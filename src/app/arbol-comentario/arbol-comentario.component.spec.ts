import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbolComentarioComponent } from './arbol-comentario.component';

describe('ArbolComentarioComponent', () => {
  let component: ArbolComentarioComponent;
  let fixture: ComponentFixture<ArbolComentarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArbolComentarioComponent]
    });
    fixture = TestBed.createComponent(ArbolComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
